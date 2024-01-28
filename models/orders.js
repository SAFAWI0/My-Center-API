const client = require("../db/index");

async function getOrders(req, res) {
  const result = await client.query(`SELECT * FROM orders`);
  res.send(result.rows);
}

async function addOrders(req, res) {
  let { items } = req.body;
  const result = await client.query( "INSERT INTO orders ( items) VALUES ($1) RETURNING *",
  [ JSON.stringify(items)]
  );
  res.send(result.rows);
}

module.exports = {
  getOrders,
  addOrders,
};
