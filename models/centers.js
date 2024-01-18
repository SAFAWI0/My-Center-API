const client = require("../db/index");

async function getCenters(req, res) {
  const result = await client.query(`SELECT * FROM centers`);
  res.send(result.rows);
}

module.exports = {
  getCenters,
};
