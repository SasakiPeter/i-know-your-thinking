import { combineReducers } from 'redux';
import postReducer from './postReducer';
import selectReducer from './selectReducer';

const rootReducer = combineReducers({
  postReducer: postReducer,
  selectReducer: selectReducer
});

export default rootReducer;