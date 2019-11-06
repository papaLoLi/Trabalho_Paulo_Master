const express = require("express");
const mongoose = require("mongoose");
const cors_Update = require("cors");

const server = express();
server.use(express.json());
server.use(cors_Update());

mongoose.connect("mongodb://localhost:27017/Paulo_Cesar_DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);
const routes = require("./routes");
server.use(routes);
server.listen(3333);
