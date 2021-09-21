import { createReducer } from "redux-act";
import initialState from "./state";
import {
  signInStart,
  signInSuccess,
  signInError,
  logoutStart,
  logoutSuccess,
  logoutError,
  signUpStart,
  signUpSuccess,
  signUpError,
} from "./actions";
import { AuthStateType, UserType } from "./types";

export const onSignInStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignInSuccess = (state: AuthStateType, payload: UserType) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignInError = (state: AuthStateType, payload: null) => ({
  ...initialState,
  error: payload,
});

export const onLogoutStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onLogoutSuccess = () => ({
  ...initialState,
});

export const onLogoutError = (state: AuthStateType, payload: null) => ({
  ...state,
  error: payload,
});

export const onSignUpStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignUpSuccess = (state: AuthStateType, payload: UserType) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignUpError = (state: AuthStateType, payload: null) => ({
  ...initialState,
  error: payload,
});


export const authReducer = createReducer<AuthStateType>({}, initialState)
  .on(signInStart, onSignInStart)
  .on(signInSuccess, onSignInSuccess)
  .on(signInError, onSignInError)
  .on(logoutStart, onLogoutStart)
  .on(logoutSuccess, onLogoutSuccess)
  .on(logoutError, onLogoutError)
  .on(signUpStart, onSignUpStart)
  .on(signUpSuccess, onSignUpSuccess)
  .on(signUpError, onSignUpError);

export default authReducer;
