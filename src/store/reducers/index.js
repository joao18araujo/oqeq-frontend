import { combineReducers } from 'redux';
import objectivesReducer from './objectives-reducer';

export default combineReducers({
  objectives: objectivesReducer,
});
