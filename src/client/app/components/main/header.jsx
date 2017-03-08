import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Header extends Component {
  signUp(){
      return (
        <Link
          className="btn btn-link"
          to="/sign_up"
        >
          SignUp
        </Link>
      );
  }

  signIn(){
    return (
      <Link
        className="btn btn-link"
        to="/sign_in"
      >
        SignIn
      </Link>
    );
  }

  signOut(){
      return (
        <button
          className="btn btn-link"
          onClick={() => this.props.signOut()}
        >
          SignOut
        </button>
      );
  }

  requireAuth(link){ return this.props.authenticated ? link : null; }

  render(){
    return (
      <nav className="navbar navbar-light navbar-fixed-top">
        <ul className="nav navbar-nav">
          <li className="nav-item"> <Link to="/" className="btn-link">Home</Link> </li>
          { this.requireAuth(<li className="nav-item"> <Link to="/todos" className="btn-link">Todos</Link> </li>) }
          { this.requireAuth(<li className="nav-item"> <Link to="/users" className="btn-link">Users</Link> </li>) }
          { this.requireAuth(<li className="nav-item"> <Link to="/books" className="btn-link">Books</Link> </li>) }
          { this.requireAuth(<li className="nav-item"> <Link to="/comments" className="btn-link">Comments</Link> </li>) }
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item"> { this.props.authenticated ? this.signOut() : this.signIn() } </li>
          <li className="nav-item"> { this.props.authenticated ? null : this.signUp() } </li>
        </ul>
      </nav>
    )
  }
};

function mapStateToProps(state){
  return { authenticated: state.auth.isAuthenticated };
}

export default connect(mapStateToProps, actions)(Header);
