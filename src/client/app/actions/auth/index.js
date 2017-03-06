import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:8000';

export function signIn({ email, password }){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/auth/signin`, { email, password })
    .then(response => {
      let token = response.data.token;
      dispatch({ type: AUTH_USER });
      axios.defaults.headers.common['authorization'] = token;
      browserHistory.push('/users');
      localStorage.setItem('token', token);
    }).catch((err) => {
      dispatch(authError('Invalid credentials'));
    });
  }
}

export function signUp({ email, password }){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/auth/signup`, { email, password })
    .then(response =>{
      let token = response.data.token;
      dispatch({ type: AUTH_USER });
      axios.defaults.headers.common['authorization'] = token;
      browserHistory.push('/users');
      localStorage.setItem('token', token);
    }).catch((err) => {
      dispatch(authError('Email in use'));
    });
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    error
  };
}

export function signOut(){
  localStorage.removeItem('token');
  axios.defaults.headers.common['authorization'] = "";
  return {
    type: UNAUTH_USER
  };
}
