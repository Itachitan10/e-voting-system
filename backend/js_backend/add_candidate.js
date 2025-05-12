const express = require("express");
const routes = express.Router();

const studentData = [];


routes.get("/addcadidata", (req, res) => {
  res.render("add_candidate");
});

routes.post("/candidates", (req, res) => {
  const allCandidates = req.body;

  if (!allCandidates) {

    res.json({ mess: "no existing data" });
    return;
  } else {
    res.json({ mess: "succesfull inserting data" });
    studentData.push(allCandidates);

  }
});

routes.get("/api1", (req, res) => {
  if (studentData.length === 0) {
    console.log("no existing data in the card");
    res.json([]);
    return;
  }

  console.log("all data", studentData);
  res.json(studentData);
});

module.exports = routes;
