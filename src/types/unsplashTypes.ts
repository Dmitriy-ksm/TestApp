export enum UnsplashActionTypes {
  INITIAL_REQUEST = 'UNSPLASH_INITIAL_REQUEST',
  ERROR_REQUEST = 'UNSPLASH_ERROR_REQUEST',
  LOAD_MORE = 'UNSPLASH_LOAD_MORE',
}

export type UnsplashAction =
  | UnsplashInitAction
  | UnsplashLoadMoreAction
  | UnsplashErrorAction;

interface UnsplashInitAction {
  type: UnsplashActionTypes.INITIAL_REQUEST;
}

interface UnsplashLoadMoreAction {
  type: UnsplashActionTypes.LOAD_MORE;
  payload: LoadMorePayload;
}

interface UnsplashErrorAction {
  type: UnsplashActionTypes.ERROR_REQUEST;
  payload: string;
}

interface LoadMorePayload {
  images: UnsplashImages[];
  lastPage: boolean;
}

export interface UnsplashState {
  images: UnsplashImages[];
  pages: number;
  lastPage: boolean;
  loading: boolean;
  error: string | null;
}

export interface UnsplashImages {
  image: string;
  user: string | null;
  alt: string;
}
