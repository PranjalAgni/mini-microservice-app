const { Router } = require('express');
const comments = require('./routes/comments');

const router = Router();

router.use('/comments', comments);

module.exports = router;
