const client = require("../db/index");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

async function regster(req, res) {
    let { name, username, password ,phone} = req.body;
  
    const hashPasswod = bcrypt.hashSync(password, 10);
  
    const result =
      await client.query(`insert into users(name,username,password,phone)
      values('${name}','${username}','${hashPasswod}','${phone}') RETURNING *`);
  
    res.send({
      success: true,
      user: result.rows[0],
    });
  }
  async function login(req, res) {
    let { username, password } = req.body;
  
    const result = await client.query(
      `SELECT * FROM users WHERE username = '${username}'`
    );
  try {
    
    if (result.rows.length === 0)
      res.send({ success: false, msg: "User not found" });
    else {
      let user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        var tokenuser = jwt.sign(user, "users");
        res.send({ success: true, tokenuser, user });
      } else res.send({ success: false, msg: "Wrong password!" });
    }
  } catch (error) {
  
  
    console.log("errror ",error)
  
  }
  }
  module.exports={
    regster,
    login
  }