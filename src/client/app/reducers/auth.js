import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  error: ""
};

export default function(state = initialState, action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, isAuthenticated: true };
    case UNAUTH_USER:
      return { ...state, isAuthenticated: false };
    case AUTH_ERROR:
      console.log(action.error);
      return { ...state, error: action.error };
    default:
      return state;
  }
}
