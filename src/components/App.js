import React, {Component, PropTypes} from 'react';

class Root extends Component {
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

Root.propTypes = {
  // Injected by React Redux
  title: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

export default Root;
