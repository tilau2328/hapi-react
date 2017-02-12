/* global */
import { compose } from 'redux';
import graphql from './graphql';

export default compose(
  graphql,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
