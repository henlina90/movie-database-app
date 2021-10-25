const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// Retreive table data (read, readUpdatedReview, update, destroy)

// Use helper func to create obj of critics properties for reviews
const criticsDetails = mapProperties({
  organization_name: "critic.organization_name",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
});

// Select from reviews where review_id exists
const read = (id) => {
  return knex("reviews").select("*").where({ review_id: id }).first();
};

// Select from reviews: join critics for updated review & critics details
const readUpdatedReview = (id) => {
  return knex("reviews as r")
    .join("critics as c", "c.critic_id", "r.critic_id")
    .select("*")
    .where({ review_id: id })
    .first()
    .then(criticsDetails);
};

// Select from reviews where review_id exists & update
const update = (updatedReview) => {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview);
};

// Select from reviews: delete from reviews where review_id exists
const destroy = (id) => {
  return knex("reviews").where({ review_id: id }).del();
};

module.exports = {
  read,
  readUpdatedReview,
  update,
  destroy,
};
