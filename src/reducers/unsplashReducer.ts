import {STATEMENT_OR_BLOCK_KEYS} from '@babel/types';
import {ActionSheetIOS} from 'react-native';
import {UnsplashAction, UnsplashState} from 'types/unsplashTypes';

export const INITIAL_REQUEST = 'UNSPLASH_INITIAL_REQUEST';
export const ERROR_REQUEST = 'UNSPLASH_ERROR_REQUEST';
export const LOAD_MORE = 'UNSPLASH_LOAD_MORE';

const initialState: UnsplashState = {
  images: [],
  pages: 1,
  lastPage: false,
  loading: false,
  error: null,
};

const unsplashReducer = (
  state = initialState,
  action: UnsplashAction,
): UnsplashState => {
  switch (action.type) {
    case INITIAL_REQUEST:
      return {
        images: state.images,
        pages: state.pages,
        lastPage: state.lastPage,
        loading: true,
        error: null,
      };
    case LOAD_MORE:
      const pages = action.payload.images.length
        ? state.pages + 1
        : state.pages;
      return {
        images: [...state.images, ...action.payload.images],
        pages: pages,
        lastPage: action.payload.lastPage,
        loading: false,
        error: null,
      };
    case ERROR_REQUEST:
      return {
        images: state.images,
        pages: state.pages,
        lastPage: state.lastPage,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        images: state.images,
        pages: state.pages,
        lastPage: state.lastPage,
        loading: false,
        error: null,
      };
  }
};

export default unsplashReducer;
