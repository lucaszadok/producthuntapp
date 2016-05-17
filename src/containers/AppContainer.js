import React from 'react';
import {connect} from 'react-redux';

import {fetchPopularPosts, fetchNewestPosts, fetchPost} from '../actions/PostsActions';
import {fetchCategories} from '../actions/CategoriesActions';
import {fetchUser} from '../actions/UserActions';
import App from '../components/App';

const mapStateToProps = state => ({
  title: state.page.title,
  user: state.user
});

const mapDispachersToProps = dispacth => ({
  getPopularPosts: API_TOKEN => dispacth(fetchPopularPosts(API_TOKEN)),
  getNewestPosts: API_TOKEN => dispacth(fetchNewestPosts(API_TOKEN)),
  getPost: (API_TOKEN, id) => dispacth(fetchPost(API_TOKEN, id)),
  getCategories: API_TOKEN => dispacth(fetchCategories(API_TOKEN)),
  getUser: API_TOKEN => dispacth(fetchUser(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(App);
