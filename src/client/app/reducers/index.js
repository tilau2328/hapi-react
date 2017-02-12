import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import apollo from './apollo';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  apollo
});

export default todoApp;
