/* global document */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import client from './graphql';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';
import Index from './pages/Index';
import Todos from './pages/Todos';

const store = createStore(reducer, middleware);

render(
  <ApolloProvider store={store} client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="todos" component={Todos} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
