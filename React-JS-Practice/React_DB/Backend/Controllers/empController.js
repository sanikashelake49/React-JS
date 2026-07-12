const db=require("../db");

const insertData=(req,res)=>{
    const{name,email}=req.body;

    const sql="INSERT INTO employee1(name,email) VALUES(?,?)";

    db.query(sql,[name,email],(err,result)=>{
        if(err){
            res.send("Failed to insert");
        }
        else{
            res.send("Successfully Inserted");
        }
    })

}

const getAllRec=(req,res)=>{
    const sql="SELECT * FROM employee1";
    db.query(sql,(err,result)=>{
        err?res.send("fail to fetch"):res.send(result);
    })

}

const deleteRec=(req,res)=>{
    const id=req.params.id;

    const sql="DELETE FROM employee1 WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        err?res.send("failed to delete"):res.send("Deleted Successfully");
    })

}

module.exports={insertData,getAllRec,deleteRec}