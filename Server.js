const express = require("express");
const PORT = 4004;
const app = express();
require("./Config/db");
const routerPath = require("./Controller/Router");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running");
});

app.use("/api", routerPath);

app.listen(PORT, () => {
  console.log(`Port ${PORT} is Listening`);
});
