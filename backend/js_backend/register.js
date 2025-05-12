const express = require("express");
const routes = express.Router();

routes.get("/register", (req, res) => {
  res.render("register");
});


const conn = require('../database/db')



routes.post ("/teachers",  async(req, res) => {
    const { name, password} = req.body;

    if (!name || !password) {
        console.log('no data');
    } else {
        const sql = await conn(`INSERT INTO teachers(name ,password ) value("${name}"," ${password}")`)
        if(!sql){ 
        console.log('error inserting  data bse');
        }else{
            console.log('sucess full inserting data bse');
            
        }
        console.log('all data is existing');
        
    }
  });
  
module.exports = routes;













