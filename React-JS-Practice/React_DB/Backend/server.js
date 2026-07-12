const express=require("express");

const cors=require("cors");

const app=express();

app.use(cors());

app.use(express.json());

const EmpRoutes=require("./routes/EmpRoutes");

app.use(EmpRoutes);

app.listen(5000,()=>{
    console.log("Server Started");
})