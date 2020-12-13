const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const errorhandler = require('errorhandler');

const routes = require('./api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(morgan('short'));

app.use('/api', routes);

app.use(errorhandler);

app.listen(1235, () => {
  console.log('Comment service started to listen on http://localhost:1235/');
});
