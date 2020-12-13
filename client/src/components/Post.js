import React from 'react';
import { Card } from 'react-bootstrap';
import AddComment from './AddComment';
import Comment from './Comment';

const Post = ({ title, id }) => {
  return (
    <div className="mt-2">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      <Comment postId={id} />
      <AddComment postId={id} />
    </div>
  );
};

export default Post;
