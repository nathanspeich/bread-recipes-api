const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const breads = {
  "italian baguette": {
    recipeName: "italian baguette",
    ingredients: ["flour", "salt"],
    measurements: ["1 cup", "2 tbsp"],
    directions: "Mix ingredients",
    totalServers: 1,
    totalPrepTime: 20,
  },
  "unknown bread": {
    recipeName: "unknown",
    ingredients: [],
    measurements: [],
    direction: "",
    totalServers: null,
    totalPrepTime: null,
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:breadName", (req, res) => {
  const breadName = req.params.breadName.toLowerCase();
  if (breads[breadName]) {
    res.json(breads[breadName]);
  } else {
    res.json(breads["unknown bread"]);
  }
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}.`);
});
