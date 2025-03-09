const express=require("express");
const cors=require("cors");
const { stat } = require("fs");

const app=express();
const port=5000;

app.use(cors());
app.use(express.json());

let request=[
    {
        id:1,
        name:"Account Opening",
        status:"pending"
    },{
        id:2,
        name:"Loan Application",
        status:"pending"
    },{
        id:3,
        name:"create account",
        status:"pending"
    },{
        id:4,
        name:"check balance",
        status:"compleeted"
    }
];

app.get("/api/requests", (req, res)=>{
    res.json(request);
})

app.post("/api/requests", (req, res)=>{
    const requestName=req.body.name;
    const requestId=request.length+1;
    const newRequest={
        id:requestId,
        name:requestName,
        status:"pending"
    }
    request.push(newRequest)
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})