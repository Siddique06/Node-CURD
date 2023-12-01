const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017";
let client = new MongoClient(url);

 async function dbConnect()
 {
    let result= await client.connect();
    let db = result.db('Node');
    return  db.collection('node');
   


 }
 

  module.exports=dbConnect;