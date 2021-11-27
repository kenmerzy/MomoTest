/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useReducer } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';
// import SplashScreen from 'react-native-splash-screen';

import { AsyncStorageKey, SInfoOptions } from '@constants';
import { AuthState, IUser } from '@types';

interface AuthAction {
  type:
    | 'INIT'
    | 'FIRST'
    | 'SIGN_IN'
    | 'SIGN_OUT'
    | 'UPDATE_USER'
    | 'BAD_REQUEST';
  user?: IUser | Partial<IUser>;
  badRequest?: boolean;
}

const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'FIRST':
      return {
        ...prevState,
        isFirstTime: true,
        loading: false,
      };
    case 'INIT':
      return {
        ...prevState,
        isFirstTime: false,
        loading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isFirstTime: false,
        user: action.user as IUser,
        loading: false,
      };
    case 'UPDATE_USER':
      return {
        ...prevState,
        user: { ...prevState.user, ...action.user } as IUser,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        user: undefined,
      };
    case 'BAD_REQUEST':
      return {
        ...prevState,
        badRequest: action?.badRequest || false,
      };
  }
};

const initState: AuthState = {
  isFirstTime: true,
  badRequest: false,
  user: undefined,
  loading: true,
};

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initState);
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem(AsyncStorageKey.INIT);
        if (!isFirstTime) {
          dispatch({ type: 'FIRST' });
          // SplashScreen.hide();
          return;
        }
        const token = await SInfo.getItem('token', SInfoOptions);
        const userString = await AsyncStorage.getItem(
          AsyncStorageKey.USER_INFO,
        );
        if (token && userString) {
          dispatch({ type: 'SIGN_IN', user: JSON.parse(userString) });
          // SplashScreen.hide();
          return;
        } else if (state.isFirstTime) {
          dispatch({ type: 'INIT' });
          // SplashScreen.hide();
        }
      } catch (error) {
        dispatch({ type: 'SIGN_OUT' });
        throw { 'Open app': error };
      }
    };
    bootstrapAsync();
  }, []);

  const funcAuth = useMemo(
    () => ({
      login: async ({ token, user }: { token: string; user: IUser }) => {
        await SInfo.setItem('token', token, SInfoOptions);
        await AsyncStorage.setItem(
          AsyncStorageKey.USER_INFO,
          JSON.stringify(user),
        );
        dispatch({ type: 'SIGN_IN', user });
      },
      logout: async () => {
        await SInfo.deleteItem('token', SInfoOptions);
        await AsyncStorage.removeItem(AsyncStorageKey.USER_INFO);
        dispatch({ type: 'SIGN_OUT' });
      },
      updateUser: async (user: Partial<IUser>) => {
        dispatch({ type: 'UPDATE_USER', user: { ...user } });
      },
      init: async (callBack?: () => void) => {
        await AsyncStorage.setItem(AsyncStorageKey.INIT, JSON.stringify(true));
        dispatch({ type: 'INIT' });
        callBack && callBack();
      },
      setBadRequest: (show: boolean) => {
        dispatch({ type: 'BAD_REQUEST', badRequest: show });
      },
    }),
    [],
  );
  return { state, funcAuth };
};
