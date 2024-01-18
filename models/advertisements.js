const client = require("../db/index");

async function getAdvertisements(req, res) {
  const result = await client.query(`SELECT * FROM advertisements`);
  res.send(result.rows);
}

module.exports = {
    getAdvertisements,
};
