import React from 'react';
import {connect} from 'react-redux';

import {fetchPopularPosts, fetchNewestPosts, fetchPost, fetchPostComments} from '../actions/PostsActions';
import {fetchCategories} from '../actions/CategoriesActions';
import {fetchUser} from '../actions/UserActions';
import App from '../components/App';

const makeProfileProps = (user = {}) => {
  return {
    name: user.name,
    image: user['image_url'] ? user['image_url']['30px'] : ''
  }
}

const mapStateToProps = state => ({
  apiToken: state.user.apiToken,
  title: state.page.title,
});

const mapDispachersToProps = dispacth => ({
  getPopularPosts: API_TOKEN => dispacth(fetchPopularPosts(API_TOKEN)),
  getNewestPosts: API_TOKEN => dispacth(fetchNewestPosts(API_TOKEN)),
  getPost: (API_TOKEN, id) => dispacth(fetchPost(API_TOKEN, id)),
  getComments: (API_TOKEN, id) => dispacth(fetchPostComments(API_TOKEN, id)),
  getCategories: API_TOKEN => dispacth(fetchCategories(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(App);
