const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const AuthError = require('../errors/auth-err');
const { error401Message } = require('../utils/statuses');

function checkAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(error401Message);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new AuthError(error401Message);
  }

  req.user = payload;
  return next();
}

module.exports = checkAuth;
