import {USER_REQUEST, USER_SUCCESS, USER_ERROR} from './UserActionTypes';
import {CALL_API} from '../middleware/api';

export const fetchUser = API_TOKEN => ({
  [CALL_API]: {
    types: [USER_REQUEST, USER_SUCCESS, USER_ERROR],
    endpoint: 'me',
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});
