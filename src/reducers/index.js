import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import page from './PageReducer';
import posts from './PostsReducer';
import user from './UserReducer';
import categories from './CategoriesReducer';

const rootReducer = combineReducers({
  page,
  posts,
  user,
  categories,
  routing,
});

export default rootReducer;
