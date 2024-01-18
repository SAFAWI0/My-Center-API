const client = require("../db/index");

async function getOffers(req, res) {
  const result = await client.query(`SELECT * FROM Offers`);
  res.send(result.rows);
}

module.exports = {
    getOffers,
};
