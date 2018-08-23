import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  postReducer: postReducer
});

export default rootReducer;