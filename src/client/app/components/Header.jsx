import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-fixed-top">
        <ul className="nav navbar-nav">
          <li className="nav-item"> <Link to="/">Home</Link> </li>
          <li className="nav-item"> <Link to="/todos">Todos</Link> </li>
        </ul>
        <ul className="nav navbar-nav pull-right">
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default Header = connect(mapStateToProps, actions)(Header);