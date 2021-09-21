import { ReduxStoreType } from "../types";
import { UserType } from "./types";

export const currentUserSelector = (state: ReduxStoreType): UserType | null =>
  state.auth.currentUser;

export const isAuthUserLoadingSelector = (state: ReduxStoreType): boolean =>
  state.auth.isLoading;
