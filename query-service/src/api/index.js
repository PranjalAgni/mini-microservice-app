const { Router } = require('express');
const query = require('./routes/query');

const router = Router();

router.use('/query', query);

module.exports = router;
