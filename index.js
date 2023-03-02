const express = require("express") ;
const cors = require("cors") ;
const  mongoose  = require("mongoose");
const app = express() ;
app.use(express.json());
app.use(cors());
const userRouter = require("./features/user/user.router");




app.use("/user",userRouter);


app.get("/", async(req, res)=>{
    try{
        res.send("API");
     }
   catch(err){
       res.status(500).send(err.message);
   }
})
app.get("/randomword", async(req, res)=>{
    try{
        function makeid(length=6) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result;
        }
        function randomIntFromInterval(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          
    
        res.send(makeid(randomIntFromInterval(5,10)));
     }
   catch(err){
       res.status(500).send(err.message);
   }
})


app.listen("8080",  async()=>{
     await mongoose.connect("mongodb+srv://bishalsharmaece:jBzQjxG7uCS010qL@cluster0.hxvferc.mongodb.net/test")
    console.log(`Listening on http://localhost:8080`);
})
