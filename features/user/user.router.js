const express = require("express") ;
const User = require("./user.schema") ;
const app = express.Router() ;
app.use(express.json()) ;



app.post("/details", async(req,res) => {
    const user=  await User.create(req.body);
    res.status(201).send("User created")
})


module.exports =app; 