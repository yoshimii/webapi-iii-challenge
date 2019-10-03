// code away!
const express = require('express');
const server = require('./server');

server.use(express());

const port = 8000;

server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})