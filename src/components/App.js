import React, {Component, PropTypes} from 'react';
import HeaderContainer from '../containers/HeaderContainer';

class App extends Component {
  componentWillMount() {
    const {apiToken} = this.props;
    this.props.getPopularPosts(apiToken);
    this.props.getCategories(apiToken);
    this.props.getPost(apiToken, 62783);
    this.props.getComments(apiToken, 62783);
  }

  render() {
    const {children, title, profile} = this.props;
    return (
      <div>
        <HeaderContainer />
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  title: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

export default App;
