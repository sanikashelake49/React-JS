const express=require("express")

const router=express.Router();

const {insertData,getAllRec,deleteRec}=require("../Controllers/empController");

router.post("/employee1",insertData);

router.get("/employee1",getAllRec);

router.delete("/employee1/:id",deleteRec);



module.exports=router;