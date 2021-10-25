const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// Retreive table data (list, read, readTheaters, readReviews)

// Use helper func to create obj of critics properties for review
const criticsDetails = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

// Select from movies: list of all movies
const list = () => {
  return knex("movies").select("*");
};

// Select from movies: join movies_theaters where movie is_showing is true
const listShowing = () => {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .distinct("m.*")
    .where({ "mt.is_showing": true })
    .orderBy("m.movie_id");
};

// Select from movies where movie_id exists
const read = (id) => {
  return knex("movies").select("*").where({ movie_id: id }).first();
};

// Select from movies_theaters: join theaters where theater is playing movie
const readTheaters = (id) => {
  return knex("movies_theaters as mt")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("t.*")
    .where({ "mt.movie_id": id });
};

// Select from reviews: join critics where movie reviews & critic details exists
const readReviews = (id) => {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select("*")
    .where({ "r.movie_id": id })
    .then((obj) => {
      return obj.map((data) => {
        return criticsDetails(data);
      });
    });
};

module.exports = {
  list,
  listShowing,
  read,
  readTheaters,
  readReviews,
};
