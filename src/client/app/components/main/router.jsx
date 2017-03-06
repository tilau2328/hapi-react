import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';
import Index from '../../pages/index';
import SignUp from '../../pages/sign_up';
import SignIn from '../../pages/sign_in';
import Users from '../../pages/users';
import Todos from '../../pages/todos';
import Comments from '../../pages/comments';

import RequireAuth from '../../containers/require_auth';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="sign_up" component={SignUp} />
        <Route path="sign_in" component={SignIn} />
        <Route path="users" component={RequireAuth(Users)} />
        <Route path="todos" component={RequireAuth(Todos)} />
        <Route path="comments" component={RequireAuth(Comments)} />
      </Route>
    </Router>
  );
}

export default AppRouter;
