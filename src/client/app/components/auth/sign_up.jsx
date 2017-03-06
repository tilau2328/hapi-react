import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
const { DOM: { input } } = React;
import * as actions from '../../actions';

class SignUp extends Component {
  componentWillUnmount(){
    this.props.authError();
  }

  handleFormSubmit({ email, password, password_confirmation }){
    if(!email){ return this.props.authError('Invalid Email'); }
    if(email.trim() == ''){ return this.props.authError('Invalid Email'); }

    if(!password){ return this.props.authError('Invalid Password'); }
    if(password.trim() == ''){ return this.props.authError('Invalid Password'); }

    if(password != password_confirmation){
      return this.props.authError('Passwords dont match ');
    }

    this.props.signUp({ email, password });
  }

  emailInput(email){
    return (
      <div className="form-group">
        <label>Email: </label>
        <input {...email.input} type="text" className="form-control" />
        { email && email.touched && email.error && <span>{email.error}</span>}
      </div>
    );
  }

  passwordInput(password){
    return (
      <div className="form-group">
        <label>Password: </label>
        <input {...password.input} type="password" className="form-control" />
        { password && password.touched && password.error && <span>{password.error}</span>}
      </div>
    );
  }

  confirmPasswordInput(password_confirmation){
    return (
      <div className="form-group">
        <label>Password: </label>
        <input
          {...password_confirmation.input}
          type="password"
          className="form-control"
        />
        {
          password_confirmation &&
          password_confirmation.touched &&
          password_confirmation.error &&
          <span>{password_confirmation.error}</span>
        }
      </div>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render(){
    const { error, pristine, handleSubmit, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <Field name="email" component={this.emailInput} />
      <Field name="password" component={this.passwordInput} />
      <Field name="password_confirmation" component={this.confirmPasswordInput} />
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">SignUp</button>
      <button
        type="button"
        className="btn btn-primary"
        disabled={pristine || submitting}
        onClick={()=>{reset(); this.props.authError()}}
      >
        Clear Values
      </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'password_confirmation']
})(connect(mapStateToProps, actions)(SignUp));
