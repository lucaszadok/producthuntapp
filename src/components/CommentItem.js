import React from 'react';

import CommentStyle from '../styles/components/comment.scss';

const CommentItem = ({comment = {}}) => {
  return (
    <article className="comment-item">
      <div className="comment-item-thumb">
        <img src={comment.user['image_url']['64px']} alt={comment.user.name} />
      </div>
      <div className="comment-item-content">
        <h4 className="comment-item-title">
          {comment.user.name}
          {comment.user.headline &&
            <span> - <small>{comment.user.headline}</small></span>
          }
        </h4>
        <p>{comment.body}</p>
      </div>
    </article>
  );
}

export default CommentItem;