const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');
const { movieValidationId, movieValidation } = require('../utils/validation');

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:itemId', movieValidationId, deleteMovie);

module.exports = router;