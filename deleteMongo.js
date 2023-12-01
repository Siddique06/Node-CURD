const dbConnect = require('./Monogodb');

 const deleteData =async()=>{
     let data= await dbConnect();
     let result = await data.deleteMany({name:'S21'})
    if(result.acknowledged){
        console.log("Recorderd Deleted succesfully");
    }
}

deleteData();