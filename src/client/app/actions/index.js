import { FETCH_USERS } from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

export function fetchUsers(){
  const request = axios.get(`${ROOT_URL}/users`);
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export * from './auth';
export * from './todos';
export * from './comments';
