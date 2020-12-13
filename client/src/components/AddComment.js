import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      comment,
    };
    const API_URL = `${process.env.REACT_APP_COMMENT_SERVICE_URL}/comments/${postId}`;
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    await fetch(API_URL, opts);
    document.location.href = '/';
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="Write your comment"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
