import React from 'react';
import {connect} from 'react-redux';

import {fetchCategories} from '../actions/CategoriesActions';
import CategoriesMenu from '../components/CategoriesMenu';

const mapStateToProps = state => ({
  apiToken: state.user.apiToken,
  categories: state.categories
});

const mapDispachersToProps = dispacth => ({
  getCategories: API_TOKEN => dispacth(fetchCategories(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(CategoriesMenu);
