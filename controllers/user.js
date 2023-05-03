const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userSchema');
const NotFoundError = require('../errors/not-found-err');
const { JWT_SECRET } = require('../config');

const { error404Message } = require('../utils/statuses');

// GET /users/me
function getCurrentUser(req, res, next) {
  User.findById(req.user._id)
    .then((user) => {
      if (user === null) {
        throw new NotFoundError(error404Message);
      }
      return res.send(user);
    })
    .catch(next);
}

// PATCH /users/me
function updateProfile(req, res, next) {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (user === null) {
        throw new NotFoundError(error404Message);
      }
      return res.send(user);
    })
    .catch(next);
}

// POST /signup
function registration(req, res, next) {
  const user = req.body;

  bcrypt.hash(user.password, 10)
    .then((hash) => User.create({ ...user, password: hash })
      .then((newUser) => res.send({
        name: newUser.name,
        email: newUser.email,
        _id: user._id,
      }))
      .catch(next));
}

// POST /signin
function login(req, res, next) {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
}

module.exports = {
  getCurrentUser, updateProfile, registration, login,
};
