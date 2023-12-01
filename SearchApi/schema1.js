const mongoose = require('mongoose');
require('./connection')
const Nschema = new mongoose.Schema({
    name: String,
    Company : String

})

module.exports =mongoose.model('nodes',Nschema);