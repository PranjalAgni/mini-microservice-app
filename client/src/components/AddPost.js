import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title) {
      return history.push('/');
    }
    const payload = {
      title,
    };

    const API_URL = `${process.env.REACT_APP_POST_SERVICE_URL}/posts`;
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    await fetch(API_URL, opts);
    window.location.href = '/';
  };

  return (
    <div className="w-50 ml-5">
      <Form>
        <h2>Create Post</h2>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
