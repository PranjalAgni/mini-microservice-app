const { Router } = require('express');
const posts = require('./routes/posts');
const router = Router();

router.use('/posts', posts);

module.exports = router;
