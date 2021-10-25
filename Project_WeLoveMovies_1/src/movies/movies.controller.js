const movies_service = require("./movies.service");
const asyncError = require("../errors/asyncErrorBoundary");

// Handlers for movies: list, read

// Use middleware to validate existing movie w/matching id
const movieExists = async (req, res, next) => {
  const { movieId } = req.params;
  const movie = await movies_service.read(movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
};

// Get all theaters where movie is playing
const readTheater = async (req, res) => {
  const { movie_id } = res.locals.movie;
  const data = await movies_service.readTheaters(movie_id);
  res.json({ data });
};

// Get all reviews for the movie
const readReviews = async (req, res) => {
  const { movie_id } = res.locals.movie;
  const data = await movies_service.readReviews(movie_id);
  res.json({ data });
};

// Get listing of current movies or movies currently showing in theaters
const list = async (req, res) => {
  const { is_showing } = req.query;

  if (is_showing === "true") {
    moviesCurrentlyShowing = movies_service.listShowing();
    res.json({ data: await moviesCurrentlyShowing });
  }
  currentMovies = movies_service.list();
  res.json({ data: await currentMovies });
};

// Get an existing movie
const read = async (req, res) => {
  res.json({ data: res.locals.movie });
};

module.exports = {
  list: [asyncError(list)],
  movieExists,
  read: [asyncError(movieExists), read],
  readTheater: [asyncError(movieExists), asyncError(readTheater)],
  readReviews: [asyncError(movieExists), asyncError(readReviews)],
};
