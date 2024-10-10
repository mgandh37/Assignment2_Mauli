import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },
    price:{
        type:Number,
        required:'Price is required'
    },
    quantity:{
        type:Number,
        required:'Quantity is required'
    }

});
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Supplement', SupplementSchema);
