const { Router } = require('express');
const { randomBytes } = require('crypto');
const fetch = require('node-fetch');

const router = Router();

const commentsByPostID = {};

router.post('/events', (req, res) => {
  console.log('Event: ', req.body);
  res.send({});
});

router.post('/:postId', (req, res) => {
  const postId = req.params?.postId;
  const commentText = req.body?.comment;

  const commentId = randomBytes(5).toString('hex');

  const currentCommentsList = commentsByPostID[postId] ?? [];

  const comment = {
    id: commentId,
    body: commentText,
  };

  commentsByPostID[postId] = [...currentCommentsList, comment];

  const payload = {
    type: 'CommentCreated',
    data: {
      ...comment,
      postId,
    },
  };

  const opts = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('http://localhost:1240/api/mq/', opts);

  res.json({
    status: 'created',
    ...comment,
  });
});

router.get('/:postId', (req, res) => {
  const postId = req.params?.postId;
  const comments = commentsByPostID[postId] ?? [];
  res.json(comments);
});

router.post('/events', (req, res) => {
  console.log('Event recieved');
  res.send({});
});

module.exports = router;
