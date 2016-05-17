import {POSTS_POPULAR_REQUEST,
        POSTS_POPULAR_SUCCESS,
        POSTS_POPULAR_ERROR,
        POSTS_NEWEST_REQUEST,
        POSTS_NEWEST_SUCCESS,
        POSTS_NEWEST_ERROR,
        POST_REQUEST,
        POST_SUCCESS,
        POST_ERROR} from '../actions/PostsActionTypes';

const initialState = {
  items: [],
  show: {
    item: null,
    errors: null,
    isLoading: false
  },
  selectedType: null,
  errors: null,
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case POSTS_POPULAR_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };
    case POSTS_POPULAR_SUCCESS:
      return {
        ...state,
        items: action.response.posts,
        selectedType: 'POPULAR_POSTS',
        isLoading: false
      };
    case POSTS_POPULAR_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    case POSTS_NEWEST_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true
      };
    case POSTS_NEWEST_SUCCESS:
      return {
        ...state,
        items: action.response.posts,
        selectedType: 'NEWEST_POSTS',
        isLoading: false
      };
    case POSTS_NEWEST_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    case POST_REQUEST:
      return {
        ...state,
        show: {
          ...state.single,
          errors: null
        },
        isLoading: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        show: {
          ...state.single,
          item: action.response.post
        },
        isLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        show: {
          ...state.single,
          errors: action.errors
        },
        isLoading: false
      };
    default:
      return state;
  }
}
