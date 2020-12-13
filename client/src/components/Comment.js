import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_COMMENT_SERVICE_URL}/comments/${postId}`
      );

      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <ListGroup>
        {comments.map(({ body, id }) => (
          <ListGroup.Item as="li" key={id}>
            {body}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Comment;
