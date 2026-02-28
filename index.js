const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("App Running - Deployed to EC2 successfully");
});

app.listen(3000, ()=> console.log("Server started"));
