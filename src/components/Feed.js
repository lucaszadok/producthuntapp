import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import PostGroupItem from './PostGroupItem';

class Feed extends Component {
  componentWillMount() {
    const {apiToken, posts} = this.props;

    if (posts.selectedType === 'NEWEST_POSTS') {
      this.props.getNewestPosts(apiToken);
    } else {
      this.props.getPopularPosts(apiToken);
    }
  }

  render() {
    const {posts} = this.props;
    return (
      <section>
        <header>
          <h3>Today</h3>
          <ul>
            <li>Popular</li>
            <li>Newest</li>
          </ul>
        </header>

        <ul>
          {posts.items.map((post, key) => {
            return (
              <li key={key}>
                <PostGroupItem post={post} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Feed;