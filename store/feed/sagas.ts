import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  getImagesStart,
  getImagesSuccess,
  getImagesError
} from "./actions";
import { feedMetaSelector } from "./selectors";

export const getImagesSaga = function* (): SagaIterator {
  try {
    const meta = yield select(feedMetaSelector);
    const result = yield call(fetch, `https://picsum.photos/v2/list?page=${meta.page}&limit=${meta.limit}`);
    const images = yield result.json();
    yield put(getImagesSuccess({
      images,
      meta: {
        ...meta,
        page: meta.page + 1,
      },
    }));
  } catch (error: any) {
    yield put(getImagesError(error));
  }
};

export default function* root() {
  yield takeLatest(getImagesStart, getImagesSaga);
}
