const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Demo-node-App Running - Deployed");
});

app.listen(3000, ()=> console.log("Server started"));
