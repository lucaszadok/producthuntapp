import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/PostsActions';
import {fetchUser} from '../actions/UserActions';
import App from '../components/App';

const mapStateToProps = state => ({
  title: state.page.title,
});

const mapDispachersToProps = dispacth => ({
  getPosts: API_TOKEN => dispacth(fetchPosts(API_TOKEN)),
  getUser: API_TOKEN => dispacth(fetchUser(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(App);
