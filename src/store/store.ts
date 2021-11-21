import {createStore, combineReducers} from 'redux';
import unsplashReducer from '../reducers/unsplashReducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';

const rootReducer = combineReducers({unsplash: unsplashReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
