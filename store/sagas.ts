import { all, fork } from "redux-saga/effects";
import feed from './feed/sagas'
import auth from "./auth/sagas";

export default function* root() {
  yield all([fork(auth)]);
  yield all([fork(feed)])
}
