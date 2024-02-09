const client = require("../db/index");

async function getOrders(req, res) {
  const result = await client.query(`SELECT * FROM orders`);
  res.send(result.rows);
}

async function addOrders(req, res) {
  let { items, phone, name } = req.body;
  const result = await client.query(
    "INSERT INTO orders (items, phone, name) VALUES ($1, $2, $3) RETURNING *",
    [JSON.stringify(items), phone, name]
  );
  res.send(result.rows);
}


module.exports = {
  getOrders,
  addOrders,
};
