const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    clouds: [
      "Cirrus",
      "Cirrostratus",
      "Cirrocumulus",
      "Cumulus",
      "Cumulonimbus",
      "Stratus",
      "Stratocumulus",
      "Altostratus",
      "Altocumulus",
      "Nimbostratus",
    ],
  });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080.");
});