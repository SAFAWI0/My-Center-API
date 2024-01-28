const client = require("../db/index");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

async function alluser(req, res) {
  const result = await client.query(`SELECT * FROM users `);
  res.send(result.rows);
}

async function regster(req, res) {
  try {
    let { name, email, password, phone } = req.body;
    const hashPasswod = bcrypt.hashSync(password, 10);
    const result =
      await client.query(`insert into users(name,email,password,phone)
      values('${name}','${email}','${hashPasswod}','${phone}') RETURNING *`);
    res.send({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.log("error: ", error);
    res.send({ success: false, msg: "registration error" });
  }
}

async function login(req, res) {
  try {
    let { email, password, name } = req.body;
    let result;
    if (email) {
      result = await client.query(
        `SELECT * FROM users WHERE email = '${email}'`
      );
    } else if (name) {
      result = await client.query(`SELECT * FROM users WHERE name = '${name}'`);
    } else {
      res.send({
        success: false,
        msg: "Please Enter Email and Password",
      });
      return;
    }
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
    console.log("errror ", error);
  }
}

async function filter(req, res) {
  try {
    let { email } = req.body;
    const result = await client.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    res.send(result.rows);
  } catch {}
}

async function updateUsers(req, res) {
  try {
    let id = req.params.id;
    let { name, phone, email, password } = req.body;
    const hashPasswod = bcrypt.hashSync(password, 10);
    const result = await client.query(`UPDATE users
  SET name = '${name}' , phone = '${phone}' , email = '${email}',password='${hashPasswod}' WHERE user_id = ${id} RETURNING *`);
    res.send({
      user: result.rows[0],
      success: true,
      msg: "update succeeded ",
    });
  } catch (error) {
    console.log("error: ", error);
    res.send({ success: false, msg: "update error" });
  }
}

module.exports = {
  alluser,
  regster,
  login,
  filter,
  updateUsers,
};
