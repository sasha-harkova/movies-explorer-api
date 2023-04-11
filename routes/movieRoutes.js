const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');
const { movieValidationId, movieValidation } = require('../utils/validation');

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:movieId', movieValidationId, deleteMovie);

module.exports = router;

// {
//   "country": "USA",
//   "director": "Name Of Director",
//   "duration": "200",
//   "year": "1999",
//   "description": "Film's description",
//   "image": "https://1.bp.blogspot.com/-7p-tghwmu94/Whg2c6IjwJI/AAAAAAAABO8/CUuq_U0PkT8jE5XoGIDk5ADxFCL16WLRwCK4BGAYYCw/s640/Harry-Potter-BlogHogwarts-Piedra-Filosofal-1.jpg",
//   "trailerLink": "https://youtu.be/ASEQ3v3NTi0",
//   "thumbnail": "https://1.bp.blogspot.com/-7p-tghwmu94/Whg2c6IjwJI/AAAAAAAABO8/CUuq_U0PkT8jE5XoGIDk5ADxFCL16WLRwCK4BGAYYCw/s640/Harry-Potter-BlogHogwarts-Piedra-Filosofal-1.jpg",
//   "nameRU": "Гарри Поттер",
//   "nameEN": "Harry Potter"
// }

// 6434584c024ce24095e7492e
