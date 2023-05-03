const router = require('express').Router();

const movieRoutes = require('./movieRoutes');
const userRoutes = require('./userRoutes');
const loginAndRegistrationRoutes = require('./loginAndRegistrationRoutes');
const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-err');
const { error404Message } = require('../utils/statuses');

router.use('/', loginAndRegistrationRoutes);
router.use(auth);
router.use('/movies', movieRoutes);
router.use('/users', userRoutes);

router.use(() => {
  throw new NotFoundError(error404Message);
});

module.exports = router;
