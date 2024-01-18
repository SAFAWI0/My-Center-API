const client = require("../db/index");

async function getCategories(req, res) {
  const result = await client.query(`SELECT * FROM categories`);
  res.send(result.rows);
}

module.exports = {
  getCategories,
};
