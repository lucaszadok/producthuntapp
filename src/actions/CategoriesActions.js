import {CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_ERROR} from './CategoriesActionTypes';
import {CALL_API} from '../middleware/api';

export const fetchCategories = API_TOKEN => ({
  [CALL_API]: {
    types: [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_ERROR],
    endpoint: 'categories',
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});
