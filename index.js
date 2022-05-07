const express = require("express");
const UserRoutes = require("./Routes/userRoutes");

const app = express();

app.use(express.json());

//Routes
app.use("/users", UserRoutes);

module.exports = app;