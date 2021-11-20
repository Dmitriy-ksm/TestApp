import Config from 'react-native-config';
import {
  INITIAL_REQUEST,
  LOAD_MORE,
  ERROR_REQUEST,
} from '../../reducers/unsplashReducer';

const PAGE_SIZE = 20;
const clientKey = 'PYMTkD7lUw0cFMdjz1EGd41XE8uBSbuOYxzZS8m_EVo';
export const fetchUnsplash = page => {
  return async dispatch => {
    dispatch({type: INITIAL_REQUEST});
    var str = `https://api.unsplash.com/search/photos?page=${page}&per_page=${PAGE_SIZE}&client_id=${clientKey}&query=all`;
    try {
      const response = await fetch(str);
      const json = await response.json();
      const lastPageInt = json.total_pages;
      const images = json.results.map(i => ({
        image: i.urls.raw,
        user: i.user.name,
        alt: i.alt_description,
      }));
      const lastPage = lastPageInt == page;
      dispatch({type: LOAD_MORE, payload: {images, lastPage}});
    } catch (error) {
      console.error(error);
      console.log(str);
      dispatch({type: ERROR_REQUEST, payload: error});
      throw error;
    }
  };
};
