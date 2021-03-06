'use strict';

/**
 * requires express to run the server
 * requires the routes of each of the middleware modules and the api
 */
const express = require('express');

const apiRouter = require('../routes/api.js');
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const authRouter = require('../routes/authorization.js');
const testAuth = require('../routes/extra-routes.js');

const app = express();

/**
 * tells express to use these different modules
 */
app.use(express.json());

app.use(timestamp);
app.use(logger);

app.get('/', (req, res) => {
  res.send('This is my API. Here are the routes available: <br> /signin <br> /users <br> /api/products <br> /api/categories');
});

app.use('/api', apiRouter);
app.use('/', authRouter);
app.use('/', testAuth);

app.use('*', error404);
app.use(error500);

/**
 * exports the server and the start function
 */

module.exports = {
  server: app, 
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Whee! We're up on ${PORT}`);
    });
  },
};