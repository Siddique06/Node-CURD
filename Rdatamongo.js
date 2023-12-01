const dbConnect = require('./Monogodb');

readData = async ()=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

readData();
module.exports=readData;