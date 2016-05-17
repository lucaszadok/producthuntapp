import {POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR} from '../actions/PostsActionTypes';

const initialState = {
  items: [],
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        items: action.response.posts,
        isLoading: false
      };
    case POSTS_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
