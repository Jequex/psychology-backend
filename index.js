const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/api/v1/", routes);

  return app;
};

module.exports = createServer;
