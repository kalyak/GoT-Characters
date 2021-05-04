import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import charReducer from './reducers';
const rootReducer = combineReducers({
  charReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
