const express = require("express");
const dotenv = require("dotenv");
const publicRoute = require("../routes/public");
const db = require("../models");
const app = express();
app.use(express.json());
dotenv.config();
const port = 8000;

app.use("/api/v1", publicRoute);
db.sequelize.sync({ force: false }).then(function () {
  app.listen(port, function () {
    console.log(`Listing on Port ${port}`);
  });
});
