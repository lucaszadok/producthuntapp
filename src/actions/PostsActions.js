import {POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR} from './PostsActionTypes';
import {CALL_API} from '../middleware/api';

export const fetchPosts = API_TOKEN => ({
  [CALL_API]: {
    types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR],
    endpoint: 'posts',
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});
