import { User } from "firebase/auth";

export type AuthStateType = {
  currentUser: User | null;
  isLoading: boolean;
  error: null;
};

export type Credentials = {
  email: string;
  password: string;
};
