const client = require("../db/index");

async function getSessions(req, res) {
  const result = await client.query(`SELECT * FROM Sessions`);
  res.send(result.rows);
}

module.exports = {
    getSessions,
};
