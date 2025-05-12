
const express = require("express");
const routes = express.Router();

routes.get("/login", (req, res) => {
  res.render("login");
});
// database
const conn = require('../database/db');



routes.get('/teachers', (req, res)=>{ 
  const {teacherName , password} = req.body

  console.log(teacherName , password);
  
})

module.exports = routes;
