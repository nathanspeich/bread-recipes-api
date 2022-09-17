const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const breads = {
  focaccia: {
    breadName: "Focaccia",
    ingredients: [
      "Bread Flour",
      "Active Dry Yeast",
      "Sea Salt",
      "Water",
      "Olive Oil",
      "Rosemary",
    ],
    measurements: ["512 grams", "8 grams", "10 grams", "455 grams"],
    directions: "",
    bakeTemp: 425,
    totalBakeTime: 25,
    totalServings: null,
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
app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}.`);
});
