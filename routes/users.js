var express = require('express');
var router = express.Router();

const listUsers = require('./userRoutes/listUsers');
const createUser = require('./userRoutes/createUser');
const getUser = require('./userRoutes/getUser');
const updateUser = require('./userRoutes/updateUser');
const deleteUser = require('./userRoutes/deleteUser');


// GET users list
router.get('/', function(req, res, next) {
  listUsers(req, res, next);
});

// Create new user
router.post('/', function(req, res, next) {
  createUser(req, res, next);
});

// GET user by id
router.get('/:id', function(req, res, next) {
  getUser(req, res, next);
});

// DELETE user by id
router.delete('/:id', function(req, res, next) {
  deleteUser(req, res, next);
});

// UPDATE user by id
router.put('/:id', function(req, res, next) {
  updateUser(req, res, next);
});

module.exports = router;
