var jwt = require("jsonwebtoken");

async function checkAuth(req, res, next) {
  let token = req.headers.token;
  jwt.verify(token, "users", function (err, decoded) {
    if (decoded) {
      next();
    } else res.status(401).send({ success: false, msg: "Unauthorized! usre" });
  });
}

module.exports = checkAuth;
