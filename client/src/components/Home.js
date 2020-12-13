import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import './styles.css';

const Home = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/add');
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_POST_SERVICE_URL}/posts`
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-root">
      <h2>Posts</h2>
      <Button variant="primary" onClick={handleSubmit}>
        Create Post
      </Button>

      <div className="m-3 p-3 d-flex flex-row flex-wrap justify-content-between">
        {posts.map(({ title, id }) => (
          <Post title={title} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
