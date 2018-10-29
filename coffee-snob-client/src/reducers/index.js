import { combineReducers } from 'redux';
import cafesReducer from './cafesReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  cafes: cafesReducer,
  comments: commentsReducer
})
