import IUser from '../../@type/user';

export type AuthState = {
  isLoggedIn: boolean;
  user: IUser | null;
};
