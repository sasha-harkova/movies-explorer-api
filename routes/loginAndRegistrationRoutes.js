const router = require('express').Router();
const { registration, login } = require('../controllers/user');
const { loginValidation, registrationValidation } = require('../utils/validation');

router.post('/signup', registrationValidation, registration);
router.post('/signin', loginValidation, login);

module.exports = router;

// {
//   "email": "q12@q12.ru",
//   "password": "q12@q12.ru"
// }
