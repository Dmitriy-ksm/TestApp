import {createStore, combineReducers} from 'redux';
import unsplashReducer from '../reducers/unsplashReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({unsplash: unsplashReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
