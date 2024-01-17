const client = require("../db/index");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

async function getalluser(req, res) {
  const result = await client.query(`select * from admins`);
  res.send(result.rows);
}

async function addadmins(req, res) {
  let { name, department, username, password } = req.body;

  const hashPasswod = bcrypt.hashSync(password, 10);

  const result =
    await client.query(`insert into admins(name,department,username,password)
    values('${name}','${department}','${username}','${hashPasswod}') RETURNING *`);

  res.send({
    success: true,
    user: result.rows[0],
  });
}
async function login(req, res) {
  let { username, password } = req.body;

  const result = await client.query(
    `SELECT * FROM admins WHERE username = '${username}'`
  );
  try {
    if (result.rows.length === 0)
      res.send({ success: false, msg: "User not found" });
    else {
      let user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        var token = jwt.sign(user, "admin");
        res.send({ success: true, token, user });
      } else res.send({ success: false, msg: "Wrong password!" });
    }
  } catch (error) {
    console.log("errror ", error);
  }
}
module.exports = {
  addadmins,
  getalluser,
  login,
};
