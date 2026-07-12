const mysql=require("mysql2");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"react_db"
});

db.connect((err)=>{
    err?console.log("Database error"+err):console.log("Database Connected");


})

module.exports=db;