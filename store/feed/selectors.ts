import { ReduxStoreType } from "../types";
import { FeedMetaType, Images } from "./types";

export const feedImagesSelector = (state: ReduxStoreType): Images =>
    state.feed.images;

export const feedIsLoadingSelector = (state: ReduxStoreType): boolean =>
    state.feed.isLoading;

export const feedMetaSelector = (state: ReduxStoreType): FeedMetaType =>
    state.feed.meta;