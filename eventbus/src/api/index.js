const { Router } = require('express');
const eventBus = require('./routes/events');

const router = Router();

router.use('/mq', eventBus);

module.exports = router;
