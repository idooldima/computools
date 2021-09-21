import { createAction } from "redux-act";
import { FeedMetaType, Images } from "./types"

export const getImagesStart = createAction("GET_IMAGES_START");
export const getImagesSuccess = createAction<{ images: Images, meta: FeedMetaType }>("GET_IMAGES_SUCCESS")
export const getImagesError = createAction<null>("GET_IMAGES_ERROR")

export const resetImages = createAction("RESET_IMAGES")
