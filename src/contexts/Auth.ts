import { createContext } from 'react';

import { AuthState, IUser } from '@types';

interface IAuthContext {
  login: (argument: { token: string; user: IUser }) => void;
  logout: () => void;
  init: (callBack?: () => void) => void;
  state: AuthState;
}
export const AuthContext = createContext({} as IAuthContext);
