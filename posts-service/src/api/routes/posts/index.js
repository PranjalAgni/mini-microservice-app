const { Router } = require('express');
const { randomBytes } = require('crypto');
const fetch = require('node-fetch');

const router = Router();

const posts = {};

router.get('/', (req, res) => {
  const postsList = Object.keys(posts).map((postId) => ({
    id: postId,
    title: posts[postId],
  }));

  res.json(postsList);
});

router.post('/events', (req, res) => {
  console.log('Event: ', req.body);
  res.send({});
});

router.post('/', (req, res, next) => {
  try {
    const postUID = randomBytes(4).toString('hex');
    const title = req.body.title;
    posts[postUID] = title;

    const payload = {
      type: 'PostCreated',
      data: {
        id: postUID,
        title,
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
      id: postUID,
      status: 'created',
    });
  } catch (err) {
    next(err);
  }
});

router.post('/events', (req, res) => {
  console.log('Event recieved');
  res.send({});
});

module.exports = router;
