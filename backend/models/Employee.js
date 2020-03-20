const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

//Definitive collective and Schema

let Employee = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    designation: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
}, {
    collection: 'employees'
    })

module.exports = mongoose.model('Employee', Employee)