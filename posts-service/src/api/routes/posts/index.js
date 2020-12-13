const { Router } = require('express');
const { randomBytes } = require('crypto');
const { nextTick } = require('process');

const router = Router();

const posts = {};

router.get('/', (req, res) => {
  const postsList = Object.keys(posts).map((postId) => ({
    id: postId,
    title: posts[postId],
  }));

  res.json(postsList);
});

router.post('/', (req, res, next) => {
  try {
    const postUID = randomBytes(4).toString('hex');
    posts[postUID] = req.body.title;
    res.json({
      id: postUID,
      status: 'created',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
