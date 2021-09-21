import { User } from "firebase/auth";

export type Credentials = {
  email: string;
  password: string;
};

export type UserType = User & {
  name: string;
  avatar_url: string;
};

export type AuthStateType = {
  currentUser: UserType | null;
  isLoading: boolean;
  error: null;
};
