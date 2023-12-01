const dbConnect = require('./Monogodb');
const readData= require('./Rdatamongo');


 const updateData = async()=>{
    let data= await dbConnect();
    let result =  await data.updateMany(
        {name:'Note 10'},{
            $set:{Company:'Infinix'}
        }
    );
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("Data updated Successfully");
    }
}
updateData();
readData();