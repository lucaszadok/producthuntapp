import React, {Component, PropTypes} from 'react';

class App extends Component {
  componentWillMount() {
    const {apiToken} = this.props.user;
    this.props.getPopularPosts(apiToken);
    this.props.getUser(apiToken);
  }

  render() {
    const {children, title, user} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

export default App;
