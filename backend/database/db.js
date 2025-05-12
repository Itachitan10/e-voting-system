const express = require("express");
const mysql = require("mysql");

const dbcofig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "voting_system",
};

const conn = mysql.createConnection(dbcofig);

conn.connect((err, result) => {
  if (err) throw err;
  console.log("connected to data base");
});

module.exports = async (query, value = []) => {
  return new Promise((resolve, rejects) => {
    conn.query(query, value, (err, result) => {
      if (err) {
        throw err;
        rejects(err);
        return
      } else {
        console.log("successfull insert to data base");
        resolve(result);
      }
    });
  });
};
