const express = require("express");
const cors = require("cors");
const reserveController = require("./reserveController");
const { initializeDB } = require("./utils");

const PORT = 3000;

const app = express();

initializeDB();

app.use(cors());
app.use(express.json());

app.get("/api", (_request, response) => {
  response.status(200).send();
});

app.use("/api", reserveController);

app.use((_request, response) => {
  response.status(404).send({ error: "not found" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
