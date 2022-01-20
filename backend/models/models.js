const mongoose = require('mongoose');

const template = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    registeredAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    surveys:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('users', template);