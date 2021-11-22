const port = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json("Hello from server");
});

app.post("/card/:id", (request, response) => {
  const { id } = request.params;
  const { name } = request.query;
  const classs = request.body;
  console.log(`Hello from server ${id} ${name}`, classs);
});

app.listen(port, () => {
  console.log("hello from server");
});
