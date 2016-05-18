import React from 'react';
import {Link} from 'react-router';

const PostGroupItem = ({post}) => {
  return (
    <article className="posts-group-item">
      <div className="posts-group-item-thumb">
        <img src={post.thumbnail['image_url']} alt={post.name} />
      </div>
      <h4>{post.name}</h4>
      <p>{post.tagline}</p>
      <ul>
        <li>Votes: {post['votes_count']}</li>
        <li>Comments: {post['comments_count']}</li>
      </ul>
      <ul>
        {post.topics.map((topic, key) => {
          return (
            <li key={key}>
              {topic.name}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default PostGroupItem;