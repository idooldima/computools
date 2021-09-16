import { createAction } from "redux-act";
import { User } from "firebase/auth";
import { Credentials } from "./types";

export const signInStart = createAction<Credentials>("SIGN_IN_START");
export const signInSuccess = createAction<User>("SIGN_IN_SUCCES");
export const signInError = createAction<null>("SIGN_IN_ERROR");

export const logoutStart = createAction("LOGOUT_START");
export const logoutSuccess = createAction("LOGOUT_SUCCES");
export const logoutError = createAction<null>("LOGOUT_ERROR");
