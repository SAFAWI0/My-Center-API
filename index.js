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
const checkAuth = require("./middleware/middleware");
const fileUpload = require("express-fileupload");
const { uploadFile } = require("@uploadcare/upload-client");

app.use(express.static("files"));
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));



app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.post("/upload", function (req, res) {
  req.files.file.mv(`files/${req.files.file.name}`, (err) => {
    if (!err) res.send("File uploaded");
    else res.send({ err, msg: "File not uploaded" });
  });
});


app.post("/api/v1/upload", async function (req, res) {
  const result = await uploadFile(req.files.file.data, {
    publicKey: process.env.publicKey,
    store: "auto",
    metadata: {
      subsystem: "uploader",
      pet: "cat",
    },
  });
  res.send(result);
});






app.use("/api/v1/user", users);
app.use("/api/v1/categories", categories);
app.use("/api/v1/centers", centers);
app.use("/api/v1/sessions", sessions);
app.use("/api/v1/offers", offers);
app.use("/api/v1/advertisements", advertisements);
app.use("/api/v1/orders",checkAuth, orders);








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
