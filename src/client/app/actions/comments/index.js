import { SAVE_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT, COMMENT_ERROR } from './types';

import axios from 'axios';

const ROOT_URL = 'http://localhost:8000';

export function fetchComments(){
  return {
    type: FETCH_COMMENTS,
    payload: axios.get(`${ROOT_URL}/comments`)
  };
}

export function saveComment(text){
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/comments`, { text: text })
      .then(response => {
        dispatch({ type: SAVE_COMMENT, payload: response.data });
      }).catch((err) => {
        dispatch(commentError(err));
      });
  };
}

export function removeComment(id){
  return (dispatch) => {
    axios
      .delete(`${ROOT_URL}/comments/${id}`)
      .then(response => {
        dispatch({ type: REMOVE_COMMENT, payload: id });
      }).catch((err) => {
        dispatch(commentError('Unable to remove comment'));
      });
  };
}

export function commentError(error){
  return {
    type: COMMENT_ERROR,
    payload: error
  }
}
