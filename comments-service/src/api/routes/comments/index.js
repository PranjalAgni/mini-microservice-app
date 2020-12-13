const { Router } = require('express');
const { randomBytes } = require('crypto');

const router = Router();

const commentsByPostID = {};

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

module.exports = router;
