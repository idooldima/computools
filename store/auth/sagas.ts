import { SagaIterator } from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  logoutError,
  logoutStart,
  logoutSuccess,
  signInError,
  signInStart,
  signInSuccess,
} from "./actions";
import { SagaActionType } from "../types";
import { Credentials } from "./types";

export const signInSaga = function* ({
  payload: { email, password },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const user = yield call(
      signInWithEmailAndPassword,
      getAuth(),
      "PIDAR@dsad.com",
      "LOHSUkablyad"
    );

    yield put(signInSuccess(user));
  } catch (error: any) {
    yield put(signInError(error));
  }
};

export const logoutSaga = function* (): SagaIterator {
  try {
    console.log("sds");
    yield call(() => getAuth().signOut());

    yield put(logoutSuccess());
  } catch (error: any) {
    console.log(error);
    yield put(logoutError(error));
  }
};

export default function* root() {
  yield takeLatest(signInStart, signInSaga);
  yield takeLatest(logoutStart, logoutSaga);
}
