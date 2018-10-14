const express = require("express");
const app = express();

const apiServer = require("./api");

app.use(express.static("dist"));
app.use("/api", apiServer);

app.listen(3001, () => console.log("Running at :3001"));
