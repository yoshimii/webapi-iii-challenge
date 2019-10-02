const express = require('express');
const server = express();
const helmet = require('helmet');
const userRouter = require('./users/userRouter');

// import middleware
const logger = require('./middleware/logger-middleware');

//set up global middleware
server.use(logger);
server.use(helmet());
server.use(express.json());
server.use('/', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
