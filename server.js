const express = require('express');
const recipeRouter = require('./recipes/recipeRouter');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Recipe Book API</h2>`)
})

module.exports = server;