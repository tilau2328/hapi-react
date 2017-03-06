import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import AppRouter from './components/main/router';
import Async from './middlewares/async'
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import client from './graphql';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers);

let token = localStorage.getItem('token');
if(token){
  axios.defaults.headers.common['authorization'] = token;
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <AppRouter />
  </ApolloProvider>
  , document.getElementById('app')
);
