import React from 'react';
import {Link} from 'react-router';

import Modal from './Modal'
import CommentItem from './CommentItem'

import PostModalStyle from '../styles/components/posts-modal.scss';

const headerStyle = (post = {}) => {
  const getScreenShot = post => post && post['screenshot_url'] ? post['screenshot_url']['850px'] : '';
  return {
    backgroundImage: `linear-gradient(
                          to bottom,
                          rgba(0, 0, 0, .4),
                          rgba(0, 0, 0, .6)),
                        url(${getScreenShot(post)})`
  }
}

const PostGroupItem = ({post = {}, comments = {}, isModalOpened, doCloseModal}) => {
  const item = post.item ? post.item : {};
  return (
    <Modal opened={isModalOpened} doCloseModal={doCloseModal}>
      <article className="post-modal">
        <header className="post-modal-header" style={headerStyle(item)}>
          <h2 className="post-modal-title">{item.name}</h2>
          <p className="post-modal-tagline">{item.tagline}</p>
          <ul className="list-inline posts-group-item-infos">
            {item['votes_count'] &&
              <li>Votes: {item['votes_count']}</li>
            }
            {item['comments_count'] &&
              <li>Comments: {item['comments_count']}</li>
            }
            {item.topics && item.topics.length > 0 &&
              <li>
                Topics:
                {item.topics.map((topic, key) => {
                  return (
                    <span key={key}> {topic.name}</span>
                  );
                })}
              </li>
            }
          </ul>
        </header>
        <div className="post-modal-comments">
          {comments && comments.items.length > 0 &&
            <ul className="list-unstyled">
              {comments.items.map((comment, key) => (
                <li key={key}>
                  <CommentItem comment={comment} />
                  {comment['child_comments'] && comment['child_comments'].length > 0 &&
                    <ul class="list-unstyled">
                      {comment['child_comments'].map((childComment, key) => (
                        <li key={key}>
                          <CommentItem comment={childComment} />
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          }
        </div>
      </article>
    </Modal>
  );
}

export default PostGroupItem;