import React from 'react';
import {connect} from 'react-redux';

import {fetchPopularPosts, fetchNewestPosts} from '../actions/PostsActions';
import Feed from '../components/Feed';

const mapStateToProps = state => ({
  apiToken: state.user.apiToken,
  posts: state.posts
});

const mapDispachersToProps = dispacth => ({
  getPopularPosts: API_TOKEN => dispacth(fetchPopularPosts(API_TOKEN)),
  getNewestPosts: API_TOKEN => dispacth(fetchNewestPosts(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(Feed);
