import {USER_REQUEST, USER_SUCCESS, USER_ERROR} from '../actions/UserActionTypes';

const initialState = {
  apiToken: 'd2db31394a41571c21d297edcd2201c234d6feacf50e111ccc71328404bbf393',
  isLoading: false
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_SUCCESS:
      return {
        ...state,
        ...action.response.user,
        isLoading: false
      };
    case USER_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
