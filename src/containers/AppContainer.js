import React from 'react';
import {connect} from 'react-redux';

import {fetchPost, fetchPostComments} from '../actions/PostsActions';
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
  getPost: (API_TOKEN, id) => dispacth(fetchPost(API_TOKEN, id)),
  getComments: (API_TOKEN, id) => dispacth(fetchPostComments(API_TOKEN, id))
});

export default connect(mapStateToProps, mapDispachersToProps)(App);
