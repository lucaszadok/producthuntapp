import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import page from './pageReducer';

const rootReducer = combineReducers({
  page,
  routing,
});

export default rootReducer;
