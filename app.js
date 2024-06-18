var express = require('express');
var path = require('path');
require('dotenv').config();

var usersRouter = require('./routes/users');

var app = express();

const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}...`)
);

module.exports = app;
