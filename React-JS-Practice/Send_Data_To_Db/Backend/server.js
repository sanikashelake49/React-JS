// console.log(__dirname);
const express = require("express");
const cors = require("cors");
const connection = require("./db");

// connection.query(
//   "SELECT * FROM students",
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   }
// );

const app = express();

app.use(cors());

app.use(express.json());

// const students = [
//   { id: 1, name: "Sanika" },
//   { id: 2, name: "Priya" }
// ];

let students = [
  // { id: 1, name: "Sanika" },
  // { id: 2, name: "Priya" }
];

app.get("/student", (req, res) => {

  connection.query(
    "SELECT * FROM students",
    (err, result) => {

      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }

    }
  );

});
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   res.send("Student Received");
// });

app.post("/students", (req, res) => {

  connection.query(
    "INSERT INTO students(name) VALUES(?)",
    [req.body.name],
    (err) => {

      if (err) {
        res.status(500).json(err);
      } else {

        connection.query(
          "SELECT * FROM students",
          (err, result) => {
            res.json(result);
          }
        );

      }

    }
  );

});

app.delete("/students/:id", (req, res) => {

  connection.query(
    "DELETE FROM students WHERE id = ?",
    [req.params.id],
    (err) => {

      if (err) {
        res.status(500).json(err);
      } else {

        connection.query(
          "SELECT * FROM students",
          (err, result) => {
            res.json(result);
          }
        );

      }

    }
  );

});

app.put("/students/:id", (req, res) => {

  connection.query(
    "UPDATE students SET name = ? WHERE id = ?",
    [req.body.name, req.params.id],
    (err) => {

      if (err) {
        res.status(500).json(err);
      } else {

        connection.query(
          "SELECT * FROM students",
          (err, result) => {
            res.json(result);
          }
        );

      }

    }
  );

});

  // console.log("UPDATED:", students);

  // res.json(students);
// s
app.listen(5100, () => {
  console.log("Server Started");
});




// const express = require("express"); //expree server

// const app = express();//we store this express server in this

// app.use(express.json());//express hould understand jsonx

// // const students = [
// //   { id: 1, name: "Sanika" },
// //   { id: 2, name: "Gauri" },
// //   { id: 3, name: "Priya" }
// // ];

// const students={
//     id:1,
//     name:"sanika",
//     age:18
// }

// app.get("/", (req, res) => {
//   res.send("Hello Backend");
// });

// app.get("/students", (req, res) => {
//   res.json(students);
// });
// app.get("/students/:id", (req, res) => {
//   res.send(req.query.id);
// });

// app.listen(5100, () => {
//   console.log("Server Started");
// });