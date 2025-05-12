const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/routes/html"));
app.use("/html", express.static(path.join(__dirname, "/routes/html")));
app.use("/css", express.static(path.join(__dirname, "/routes/css")));
app.use("/js", express.static(path.join(__dirname, "/routes/js")));


const login= require("./backend/js_backend/login");
const vote = require("./backend/js_backend/add_candidate");
const register = require('./backend/js_backend/register')
const admin = require('./backend/js_backend/admin')
const voting_user = require('./backend/js_backend/voting_user')
const totalvotes = require('./backend/js_backend/totalvotes')

app.use('/', totalvotes)
app.use('/', admin)
app.use("/", register);
app.use('/' , login)
app.use('/', vote)
app.use('/' , voting_user)
const port = 3000;
app.listen(port, (err) => {
  console.log("running on port  3000");
});
