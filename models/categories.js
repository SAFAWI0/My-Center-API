const client = require("../db/index");

async function getCategories(req, res) {
  let id = req.params.id;
  const result = await client.query(`SELECT * FROM categories `);
  res.send(result.rows);
}

async function addCategories(req, res) {
  let { name, img } = req.body;
  const result = await client.query(
    `INSERT INTO categories (name,img) VALUES ('${name}','${img}') RETURNING *`
  );
  res.send(result.rows);
}

async function updateCategories(req, res) {
  let cat_id = req.params.id;
  let { name, img } = req.body;
  const result = await client.query(`UPDATE categories
  SET img = '${img}' , name = '${name}' WHERE cat_id = ${cat_id} RETURNING *`);
  res.send(result.rows);
}

async function deleteCategories(req, res) {
  let cat_id = req.params.id;
  const result = await client.query(`DELETE FROM categories
  WHERE cat_id = ${cat_id} RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
};
