import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import reducer from './reducers';
import { App } from './components';
import { Index, Todos } from './pages';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index }/>
        <Route path="todos" component={ Todos }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);