const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    Name :{
        type: String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Message : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact;