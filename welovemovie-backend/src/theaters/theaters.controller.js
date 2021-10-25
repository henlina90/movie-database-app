const theaters_service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Return all the theaters & the movies playing at each theatre
const list = async (req, res) => {
  const data = await theaters_service.list();
  res.json({ data });
};

module.exports = { list };
