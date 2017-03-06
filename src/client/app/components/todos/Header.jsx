import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

let Header = () => (
  <nav className="navbar navbar-light navbar-fixed-top">
    <ul className="nav navbar-nav">
      <li className="nav-item"> <Link to="/">Home</Link> </li>
      <li className="nav-item"> <Link to="/todos">Todos</Link> </li>
      <li className="nav-item"> <Link to="/pdf">Pdf</Link> </li>
    </ul>
  </nav>
);

function mapStateToProps() {
  return {};
}

export default Header = connect(mapStateToProps, actions)(Header);
