const express = require("express");
const app = express();
const port = 3000;
const checkAuth = require("./middleware/middleware");
const admin = require("./router/admin");
const users = require("./router/users");
const prodect = require("./router/products");
const order = require("./router/orders");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", admin);
app.use("/api/v1", checkAuth, prodect);
app.use("/user", users);
app.use("/order", order);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
