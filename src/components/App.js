import React, {Component, PropTypes} from 'react';

class App extends Component {
  componentWillMount() {
    const token = 'd2db31394a41571c21d297edcd2201c234d6feacf50e111ccc71328404bbf393';
    this.props.getPosts(token);
    this.props.getUser(token);
  }

  render() {
    const {children, title} = this.props;
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
  // Injected by React Router
  children: PropTypes.node
};

export default App;
