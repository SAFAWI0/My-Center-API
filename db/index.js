const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
    connectionString: process.env.DATABASE_CONNECTION,
  });
  
  client
    .connect()
    .then(() => console.log("Connected"))
    .catch((e) => console.log("Error", e));
  
  
  module.exports = client