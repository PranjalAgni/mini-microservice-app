const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();

router.post('/', (req, res) => {
  console.log(req.body);

  const opts = {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Post Service
  fetch('http://localhost:1234/api/posts/events', opts);
  // Comment Service
  fetch('http://localhost:1235/api/comments/events', opts);
  // Query Service
  fetch('http://localhost:1236/api/query/events', opts);

  res.send({});
});

module.exports = router;
