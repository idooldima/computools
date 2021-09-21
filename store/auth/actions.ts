import { createAction } from "redux-act";
import { Credentials, UserType } from "./types";

export const signInStart = createAction<Credentials>("SIGN_IN_START");
export const signInSuccess = createAction<UserType>("SIGN_IN_SUCCESS");
export const signInError = createAction<null>("SIGN_IN_ERROR");

export const logoutStart = createAction("LOGOUT_START");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const logoutError = createAction<null>("LOGOUT_ERROR");

export const signUpStart = createAction<Credentials>("SIGN_UP_START")
export const signUpSuccess = createAction<UserType>("SIGN_UP_SUCCESS");
export const signUpError = createAction<null>("SIGN_UP_ERROR");
