const client = require("../db/index");

async function getCenters(req, res) {
  let search = req.query.search || "";
  const result = await client.query(
    `SELECT * FROM centers WHERE center_name ILIKE '%${search}%'`
  );
  res.send(result.rows);
}

async function getCentersById(req, res) {
  let id = req.params.id;
  const result = await client.query(
    `SELECT * FROM centers WHERE center_id =${id}`
  );
  res.send(result.rows);
}

async function getCentersByCat(req, res) {
  let cat = req.query.cat;
  const result = await client.query(
    `SELECT * FROM centers WHERE cat_id = '${cat}' `
  );
  res.send(result.rows);
}

module.exports = {
  getCenters,
  getCentersByCat,
  getCentersById,
};
