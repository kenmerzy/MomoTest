export interface IUser {
  name: string;
}
export interface AuthState {
  isFirstTime: boolean;
  user?: IUser;
  badRequest: boolean;
  loading: boolean;
}
