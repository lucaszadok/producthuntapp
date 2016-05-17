import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import page from './PageReducer';
import posts from './PostsReducer';

const rootReducer = combineReducers({
  page,
  posts,
  routing,
});

export default rootReducer;
