import {CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_ERROR} from '../actions/CategoriesActionTypes';

const initialState = {
  items: [],
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.response.categories,
        isLoading: false
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
