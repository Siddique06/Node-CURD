const mongoose = require('mongoose');
const dbConnect = require('./Monogodb');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/Node');
const PSchema = new mongoose.Schema({
    name: String,
    Company: String
});





const SaveInDb = async () => {
    const PModel = mongoose.model('nodes', PSchema);///Mongoose automatically looks for the plural, lowercased version of your model name. 
    let data = new PModel({ name: "Hot 10", Company: 'Samsung' });
    let result = await data.save();

    console.log(result);




}
const updateInDb = async()=>{
    const PModel = mongoose.model('nodes',PSchema);
    let data = await PModel.updateOne(
        {
            Company:'Samsung'
        },
        {
            $set: {name:'S2'}
        }
    )
    console.log(data);
}
const delInDb = async ()=>{
    const Cmodel = mongoose.model('nodes',PSchema);
    let data = await Cmodel.deleteOne({name:"Note 10"});

    console.log(data);
}

const findInDb = async()=>{
    const Cmodel = mongoose.model('nodes',PSchema);
    let data = await Cmodel.find({Company: 'Samsung'});
    console.log(data);
    
}
findInDb();