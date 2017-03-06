import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import users from './users';
import todos from './todos';
import comments from './comments';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  auth,
  users,
  comments,
  visibilityFilter,
  form
});

export default rootReducer;
