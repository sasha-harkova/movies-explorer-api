const Movie = require('../models/movieSchema');
const NotFoundError = require('../errors/not-found-err');
const TryingIsFailed = require('../errors/trying-is-failed');

const { error403Message, error404Message } = require('../utils/statuses');

// GET /movies
function getMovies(req, res, next) {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch(next);
}

// POST /movies
function createMovie(req, res, next) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch(next);
}

// DELETE /movies/_id
function deleteMovie(req, res, next) {
  Movie.findById(req.params.movieId)
    .orFail(new NotFoundError(error404Message))
    .then((movie) => {
      if (movie.owner.toString() === req.user._id) {
        Movie.deleteOne(movie)
          .then((data) => res.send(data))
          .catch(next);
      } else {
        throw new TryingIsFailed(error403Message);
      }
    })
    .catch(next);
}

module.exports = { getMovies, createMovie, deleteMovie };
