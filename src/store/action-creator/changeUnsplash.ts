import Config from 'react-native-config';
import {
  INITIAL_REQUEST,
  LOAD_MORE,
  ERROR_REQUEST,
} from '../../reducers/unsplashReducer';

import {RequestResponse} from '../../types/ApiTypes';
import {Dispatch} from 'react';
import {UnsplashAction, UnsplashActionTypes} from '../../types/unsplashTypes';

const PAGE_SIZE = 20;
const clientKey = 'PYMTkD7lUw0cFMdjz1EGd41XE8uBSbuOYxzZS8m_EVo';
export const fetchUnsplash = (page: number) => {
  return async (dispatch: Dispatch<UnsplashAction>) => {
    dispatch({type: UnsplashActionTypes.INITIAL_REQUEST});
    var link = `https://api.unsplash.com/search/photos?page=${page}&per_page=${PAGE_SIZE}&client_id=${clientKey}&query=all`;
    try {
      const response = await fetch(link);
      const json = (await response.json()) as RequestResponse;
      const lastPageInt = json.total_pages;
      const images = json.results.map(i => ({
        image: i.urls.raw,
        user: i.user.name,
        alt: i.alt_description,
      }));
      const lastPage = lastPageInt == page;
      dispatch({
        type: UnsplashActionTypes.LOAD_MORE,
        payload: {images, lastPage},
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: UnsplashActionTypes.ERROR_REQUEST,
        payload: error as string,
      });
      throw error;
    }
  };
};
