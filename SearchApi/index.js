const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require('./connection');
const dbmodel = require('./schema1');

const app = express();
app.use(express.json);


app.get('/search/:name',async (req,resp)=>{
        let result = await dbmodel.find(req.params.name);
        console.log(result);
        resp.send('done');

})
app.listen(4200);




