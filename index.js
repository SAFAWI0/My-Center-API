const express = require("express");
const app = express();
const port = 3000;
const users = require("./router/users");
const categories = require("./router/categories");
const centers = require("./router/centers");
const sessions = require("./router/sessions");
const offers = require("./router/offers");
const advertisements = require("./router/advertisements");
const orders = require("./router/orders");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/user", users);
app.use("/api/v1/categories", categories);
app.use("/api/v1/centers", centers);
app.use("/api/v1/sessions", sessions);
app.use("/api/v1/offers", offers);
app.use("/api/v1/advertisements", advertisements);
app.use("/api/v1/orders", orders);








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
