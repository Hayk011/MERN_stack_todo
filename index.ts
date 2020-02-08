import express from "express";
const app:express.Application = express();


app.listen(5000,(req,res) =>{
    console.log("server is runing")
})