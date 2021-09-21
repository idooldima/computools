import { createReducer } from "redux-act";
import initialState from "./state";
import {
  getImagesStart,
  getImagesSuccess,
  getImagesError,
  resetImages,
} from "./actions";
import { FeedMetaType, FeedStateType, Images } from "./types";

export const onGetImagesStart = (state: FeedStateType) => ({
  ...state,
  isLoading: true,
});

export const onGetImagesSuccess = (state: FeedStateType, payload: { images: Images, meta: FeedMetaType }) => ({
  ...state,
  images: [...state.images, ...payload.images],
  meta: payload.meta,
  isLoading: false,
});

export const onGetImagesError = (state: FeedStateType, payload: null) => ({
  ...initialState,
  error: payload,
});

export const onResetImages = (state: FeedStateType) => ({
  ...initialState,
});

export const feedReducer = createReducer<FeedStateType>({}, initialState)
  .on(getImagesStart, onGetImagesStart)
  .on(getImagesSuccess, onGetImagesSuccess)
  .on(getImagesError, onGetImagesError)
  .on(resetImages, onResetImages)

export default feedReducer;
