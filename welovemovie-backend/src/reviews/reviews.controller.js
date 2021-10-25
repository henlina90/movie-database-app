const reviews_service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Handlers for movies: destroy, update

// Use middleware to validate review w/matching id
const reviewExists = async (req, res, next) => {
  const { reviewId } = req.params;
  const review = await reviews_service.read(reviewId);

  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: "Review cannot be found." });
};

// Update review details w/matching id
const update = async (req, res) => {
  const { review_id } = res.locals.review;
  const updatedReview = {
    ...req.body.data,
    review_id,
  };

  await reviews_service.update(updatedReview);
  const data = await reviews_service.readUpdatedReview(review_id);

  res.json({ data });
};

// Delete review w/matching id
const destroy = async (req, res) => {
  const { review } = res.locals;
  await reviews_service.destroy(review.review_id);

  res.sendStatus(204);
};

module.exports = {
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
