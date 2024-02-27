const client = require("../db/index");

async function getSupport(req, res) {
  const result = await client.query(`select * from support `);
  res.send(result.rows);
}

async function addSupport(req, res) {
  let { message, name, email } = req.body;
  const result = await client.query(
    `INSERT INTO support (message, name,email  ) VALUES 
    ('${message}','${name}','${email}') RETURNING *`
  );
  res.send(result.rows);
}

async function updateSupport(req, res) {
  let id = req.params.id;
  let { message, name, email } = req.body;
  const result = await client.query(`UPDATE support
  SET message = '${message}' , name = '${name}', email = '${email}' WHERE id = ${id} RETURNING *`);
  res.send(result.rows);
}

async function deleteSupport(req, res) {
  let id = req.params.id;
  const result = await client.query(`DELETE FROM support
  WHERE id = ${id} RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getSupport,
  addSupport,
  updateSupport,
  deleteSupport,
};
