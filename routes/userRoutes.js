const router = require('express').Router();
const { getCurrentUser, updateProfile } = require('../controllers/user');
const { userValidation } = require('../utils/validation');

router.get('/me', getCurrentUser);
router.patch('/me', userValidation, updateProfile);

module.exports = router;

// {
//   "name": "Тестовый15",
//   "email": "q12@q12.ru"
// }
