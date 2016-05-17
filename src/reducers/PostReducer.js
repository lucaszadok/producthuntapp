import {POST_REQUEST, POST_SUCCESS, POST_ERROR} from '../actions/PostsActionTypes';

const initialState = {
  item: null,
  errors: null,
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        item: action.response.post,
        isLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
