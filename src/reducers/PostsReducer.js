import {POSTS_POPULAR_REQUEST,
        POSTS_POPULAR_SUCCESS,
        POSTS_POPULAR_ERROR,
        POSTS_NEWEST_REQUEST,
        POSTS_NEWEST_SUCCESS,
        POSTS_NEWEST_ERROR,
        POST_REQUEST,
        POST_SUCCESS,
        POST_ERROR,
        POST_COMMENTS_REQUEST,
        POST_COMMENTS_SUCCESS,
        POST_COMMENTS_ERROR} from '../actions/PostsActionTypes';

const initialState = {
  items: [],
  show: {
    item: null,
    comments: [],
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
          ...state.show,
          errors: null
        },
        isLoading: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        show: {
          ...state.show,
          item: action.response.post
        },
        isLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        show: {
          ...state.show,
          errors: action.errors
        },
        isLoading: false
      };
    case POST_COMMENTS_REQUEST:
      return {
        ...state,
        show: {
          ...state.show,
          errors: null
        },
        isLoading: true
      };
    case POST_COMMENTS_SUCCESS:
      return {
        ...state,
        show: {
          ...state.show,
          item: action.response.post
        },
        isLoading: false
      };
    case POST_COMMENTS_ERROR:
      return {
        ...state,
        show: {
          ...state.show,
          errors: action.errors
        },
        isLoading: false
      };
    default:
      return state;
  }
}
