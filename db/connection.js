const mysql = require("mysql2");
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: "localhost",
        // username
        user: "root",
        // pw
        password: process.env.DB_PASSWORD,
        database: "company",
    },
    console.log("Connected to the company DB")
);

module.exports = db;