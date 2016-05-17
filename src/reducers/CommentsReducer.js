import {POST_COMMENTS_REQUEST, POST_COMMENTS_SUCCESS, POST_COMMENTS_ERROR} from '../actions/PostsActionTypes';

const initialState = {
  items: [],
  errors: null,
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case POST_COMMENTS_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };
    case POST_COMMENTS_SUCCESS:
      return {
        ...state,
        items: action.response.comments,
        isLoading: false
      };
    case POST_COMMENTS_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
