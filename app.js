const express = require('express');
const app = express();
const cal = require('./calculator');
app.get('/add', (req,res) =>{

     let a= parseInt(req.query.a);
     let b= parseInt(req.query.b);
     res.json({
         result: cal.add(a,b)
     })
})




module.exports= app;