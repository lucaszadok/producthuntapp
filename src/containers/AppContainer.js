import React from 'react';
import {connect} from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => ({
  title: state.page.title,
});

export default connect(mapStateToProps)(App);
