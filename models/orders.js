const client = require("../db/index");

async function getallorder(req, res) {
  const result = await client.query(`select * from ordersone`);
  res.send(result.rows);
}
async function addorder(req, res) {
  let {  product_id, user_id, location, order_date } = req.body;
  try {
    const result =
      await client.query(`insert into ordersone( product_id, user_id, location,order_date)
        values('${product_id}','${user_id}','${location}','${order_date}') RETURNING *`);

    res.send({
      success: true,
      user: result.rows[0]
    });
  } catch (error) {
    res.send({
      feild: false,
      ERROR: error,
      message: "Error in adding the order"
      
    });
  }
}
async function updateOrderStatus(req, res) {
  const { status ,orderId} = req.body;
 
 try{
 result= await client
    .query(`update ordersONE set status='${status}' where id=${orderId} RETURNING *` )
    res.send({
      success: true,
      user: result.rows[0]
    });
    
  }catch (error) {
    res.send({
      feild: false,
      ERROR: error,
      message: "Error in adding the SET STUTS"
      
    });
  }
}

module.exports = {
  getallorder,
  addorder,
  updateOrderStatus,
};
