const client = require("../db");

async function getOrders(req, res) {
    const result = await client.query(`select * from users`);
    res.send(result.rows);
  }

  module.exports = {
    getOrders
  };
  