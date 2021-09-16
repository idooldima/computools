import { all, fork } from "redux-saga/effects";
import auth from "./auth/sagas";

export default function* root() {
  yield all([fork(auth)]);
}
