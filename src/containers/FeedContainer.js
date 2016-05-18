import React from 'react';
import {connect} from 'react-redux';

import {fetchPopularPosts, fetchNewestPosts, fetchPost, fetchPostComments} from '../actions/PostsActions';
import Feed from '../components/Feed';

const mapStateToProps = state => ({
  apiToken: state.user.apiToken,
  posts: state.posts,
  post: state.post,
  comments: state.comments
});

const mapDispachersToProps = dispacth => ({
  getPopularPosts: API_TOKEN => dispacth(fetchPopularPosts(API_TOKEN)),
  getNewestPosts: API_TOKEN => dispacth(fetchNewestPosts(API_TOKEN)),
  getPost: (API_TOKEN, id) => dispacth(fetchPost(API_TOKEN, id)),
  getComments: (API_TOKEN, id) => dispacth(fetchPostComments(API_TOKEN, id))
});

export default connect(mapStateToProps, mapDispachersToProps)(Feed);
