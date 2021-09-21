

export type ImageType = {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string

};
export type Images = ImageType[]

export type FeedMetaType = {
    page: number;
    limit: number;
};

export type FeedStateType = {
    images: Images,
    meta: FeedMetaType,
    isLoading: boolean;
    error: null;
};