import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/UserActions';
import Header from '../components/Header';

const makeProfileProps = (user = {}) => {
  return {
    name: user.name,
    image: user['image_url'] ? user['image_url']['30px'] : ''
  }
}

const mapStateToProps = state => ({
  apiToken: state.user.apiToken,
  profile: makeProfileProps(state.user)
});

const mapDispachersToProps = dispacth => ({
  getUser: API_TOKEN => dispacth(fetchUser(API_TOKEN))
});

export default connect(mapStateToProps, mapDispachersToProps)(Header);
