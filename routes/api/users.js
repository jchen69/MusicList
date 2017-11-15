const express = require('express');

const router = express.Router();

// Import our User model
const User = require('../../models/user');
// GET User List.
router.get('/list', (req, res, next) => {
// Find all matching users, which in this case is all of 'em
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
