/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useReducer } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';

import { AsyncStorageKey, SInfoOptions } from '@constants';
import { AuthState, IUser } from '@types';

interface AuthAction {
  type: 'INIT' | 'SIGN_IN' | 'SIGN_OUT';
  user?: IUser | Partial<IUser>;
  badRequest?: boolean;
}

const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
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

    case 'SIGN_OUT':
      return {
        ...prevState,
        user: undefined,
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
        const token = await SInfo.getItem('token', SInfoOptions);
        const userString = await AsyncStorage.getItem(
          AsyncStorageKey.USER_INFO,
        );
        if (token && userString) {
          dispatch({ type: 'SIGN_IN', user: JSON.parse(userString) });
          return;
        } else if (state.isFirstTime) {
          dispatch({ type: 'INIT' });
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
      init: async (callBack?: () => void) => {
        await AsyncStorage.setItem(AsyncStorageKey.INIT, JSON.stringify(true));
        dispatch({ type: 'INIT' });
        callBack && callBack();
      },
    }),
    [],
  );
  return { state, funcAuth };
};
