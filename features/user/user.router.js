const express = require("express") ;
const User = require("./user.schema") ;
const app = express.Router() ;
app.use(express.json()) ;



app.post("/", async(req,res) => {
    try{
    const user=  await User.create(req.body);
    res.status(201).send(user)
    }
    catch(err){
        res.status(500).send(err.message);
    }
})
app.patch("/:id", async (req,res)=>{
    try{
        let id = req.params.id;
        let update = await User.updateOne({"_id":id},{$set:{...req.body}});
        res.status(200).send("Details Updated Successfully!");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})
app.get("/:id", async (req,res)=>{
    try{ let id = req.params.id ;
        const user=  await User.find({"_id":id});
         res.status(201).send(user)
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})
module.exports =app; 