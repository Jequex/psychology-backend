const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", routes);

const port = process.env.PORT;

app.listen(port, () => console.log(`server listening on port ${port}`));
