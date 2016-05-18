import React from 'react';
import {Link} from 'react-router';

import PostGroupItemStyle from '../styles/components/posts-group-item.scss';

const PostGroupItem = ({post}) => {
  return (
    <article className="posts-group-item">
      <div className="posts-group-item-thumb">
        <img src={post.thumbnail['image_url']} alt={post.name} />
      </div>
      <div className="posts-group-item-content">
        <h4 className="posts-group-item-title">{post.name}</h4>
        <p>{post.tagline}</p>
        <ul className="list-inline posts-group-item-infos">
          <li>Votes: {post['votes_count']}</li>
          <li>Comments: {post['comments_count']}</li>
          {post.topics && post.topics.length > 0 &&
            <li>
              Topics:
              {post.topics.map((topic, key) => {
                return (
                  <span key={key}> {topic.name}</span>
                );
              })}
            </li>
          }
        </ul>
      </div>
    </article>
  );
}

export default PostGroupItem;