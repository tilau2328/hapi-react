import { SAVE_COMMENT, FETCH_COMMENTS, REMOVE_COMMENT } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case FETCH_COMMENTS:
      return action.payload;
    case SAVE_COMMENT:
      return [ ...state, action.payload ]
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id != action.payload);
    default:
      return state;
  }
}
