const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "studentdb",
});

connection.connect((err) => {
  if (err) {
    console.log("Connection Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = connection;