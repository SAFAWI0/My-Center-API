const client = require("../db/index");

async function getOrders(req, res) {
  const result = await client.query(`SELECT * FROM orders`);
  res.send(result.rows);
}

async function addOrders(req, res) {
  let { price, order_ate } = req.body;
  const result = await client.query(`INSERT INTO orders ( price,order_ate)
    VALUES ('${price}', '${order_ate}') RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getOrders,
  addOrders,
};
