/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
import { compose } from 'redux';
import graphql from './graphql';
import async from './async';

export default compose(
  async,
  graphql,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
