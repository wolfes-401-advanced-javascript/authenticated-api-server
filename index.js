'use strict';
/**
 * requires a dotenv file
 * points to the server file
 * points the PORT to the .env or use 3000
 * requires mongoose
 */
require('dotenv').config();
const server = require('./lib/server.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

/**
 * connects to mongoose via the .env
 */

mongoose.connect(process.env.MONGO_URI_PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/**
 * Proof of life
 */

const db = mongoose.connection;
db.on('open', () => {
  console.log('The mongoose is chillin!');
});

/**
 * starts the server
 */
server.start(PORT);