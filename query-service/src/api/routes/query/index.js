const { Router } = require('express');

const router = Router();

const posts = {};

router.get('/posts', (req, res) => {
  res.json(posts);
});

router.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments: [],
    };
  } else if (type === 'CommentCreated') {
    const { id, body, postID } = data;
    const post = posts[postID];
    post.comments.push({ id, body });
  }
  res.send({});
});

module.exports = router;
