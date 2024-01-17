const client = require("../db/index");

async function getallproducts(req, res) {
  const result = await client.query(`select * from products`);
  res.send(result.rows);
}

async function addprodects(req, res) {
  let { product_name, price, image_data, description } = req.body;

  const result =
    await client.query(`insert into products(product_name, price, image_data, description)
      values('${product_name}','${price}','${image_data}','${description}') RETURNING *`);

  res.send({
    success: true,
    user: result.rows[0],
  });
}
async function updataprodects(req, res) {
  let id = req.params.id;
  let { column_name, info } = req.body;

  try {
    const result = await client.query(
      `UPDATE products SET ${column_name} = '${info}' WHERE product_id = '${id}' RETURNING *`
    );
    res.send({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    res.send({
      feild: false,
      Error: error,
    });
  }
}
  async function deleteproduct(req, res) {
    let id = req.params.id;
    try {
      const result = await client.query(
        `DELETE FROM products WHERE product_id='${id}'  RETURNING *`
      );
      res.send({
        success: true,
        user: result.rows[0],
      });
    } catch (error) {
      res.send({
        feild: false,
        Error: error,
      });
    }
   
}

module.exports = {
  addprodects,
  updataprodects,
  getallproducts,
  deleteproduct
}
