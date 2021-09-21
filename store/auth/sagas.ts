import { SagaIterator } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {
  logoutError,
  logoutStart,
  logoutSuccess,
  signInError,
  signInStart,
  signInSuccess,
  signUpStart,
  signUpSuccess,
  signUpError,
} from "./actions";
import { SagaActionType } from "../types";
import { Credentials } from "./types";

export const getFakeUser = async function () {
  const result = await fetch('https://reqres.in/api/users/1')
  const { data } = await result.json();
  return {
    name: `${data.first_name} ${data.last_name}`,
    avatar_url: data.avatar,
  };
};

export const signInSaga = function* ({
  payload: { email, password },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const userData = yield call(
      signInWithEmailAndPassword,
      getAuth(),
      'idooldima@gmail.com',
      'qwaterstaf'
    );

    const fakeUserData = yield call(
      getFakeUser
    );

    yield put(signInSuccess({
      ...userData.user,
      ...fakeUserData,
    }));
  } catch (error: any) {
    yield put(signInError(error));
  }
};

export const logoutSaga = function* (): SagaIterator {
  try {
    yield call(() => getAuth().signOut());

    yield put(logoutSuccess());
  } catch (error: any) {
    console.log(error);
    yield put(logoutError(error));
  }
};

export const signUpSaga = function* ({
  payload: { email, password },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(
      createUserWithEmailAndPassword,
      getAuth(),
      email,
      password
    );

    const fakeUserData = yield call(
      getFakeUser
    );

    yield put(signUpSuccess({
      ...result.user,
      ...fakeUserData,
    }));
  } catch (error: any) {
    yield put(signUpError(error));
  }
};


export default function* root() {
  yield takeLatest(signInStart, signInSaga);
  yield takeLatest(logoutStart, logoutSaga);
  yield takeLatest(signUpStart, signUpSaga)
}
