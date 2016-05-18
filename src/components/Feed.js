import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import PostGroupItem from './PostGroupItem';
import PostModal from './PostModal';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productModal: {
        opened: false
      }
    };
  }

  componentWillMount() {
    const {apiToken, posts} = this.props;

    if (posts.selectedType === 'NEWEST_POSTS') {
      this.props.getNewestPosts(apiToken);
    } else {
      this.props.getPopularPosts(apiToken);
    }
  }

  handlePopularClick(e) {
    e.preventDefault()
    const {apiToken} = this.props;
    this.props.getPopularPosts(apiToken);
  }

  handleNewestClick(e) {
    e.preventDefault();
    const {apiToken} = this.props;
    this.props.getNewestPosts(apiToken);
  }

  handleModalClose(e) {
    this.setState({
      productModal: {
        opened: false
      }
    });
  }

  displayProductModal(id) {
    return e => {
      e.preventDefault();
      const {apiToken} = this.props;
      this.props.getPost(apiToken, id);
      this.props.getComments(apiToken, id);
      this.setState({
        productModal: {
          opened: true
        }
      });
    }
  }

  render() {
    const {posts, post, comments} = this.props;
    return (
      <div>
        {posts.isLoading &&
          <div className="card-loading-text">Hunting Down Posts...</div>
        }
        {!posts.isLoading &&
          <section className="card card-default">
            <header className="card-header">
              <h3 className="card-title">Today</h3>
              <ul className="card-header-actions">
                <li className="card-header-actions-item">
                  <button className="btn btn-sm btn-link"
                          onClick={this.handlePopularClick.bind(this)}
                          disabled={posts.selectedType === 'POPULAR_POSTS'}>Popular</button>
                </li>
                <li className="card-header-actions-item">
                  <button className="btn btn-sm btn-link"
                          onClick={this.handleNewestClick.bind(this)}
                          disabled={posts.selectedType === 'NEWEST_POSTS'}>Newest</button>
                </li>
              </ul>
            </header>

            <ul className="list-group list-unstyled">
              {posts.items.map((post, key) => {
                return (
                  <li key={key}>
                    <a className="list-group-item"
                       href=""
                       onClick={this.displayProductModal(post.id)}>
                      <PostGroupItem post={post} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        }
        <PostModal post={post}
                   comments={comments}
                   isModalOpened={this.state.productModal.opened}
                   doCloseModal={this.handleModalClose.bind(this)} />
      </div>
    );
  }
}

export default Feed;