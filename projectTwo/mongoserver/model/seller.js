const mongoose=require('mongoose');

// Create the User Schema
const sellerSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, // Unique index. If you specify `unique: true`
        required: true
    },
    password: {
        type: String,
        required: true,
        min:4,
        max:20
    },
    status:{
        type:Boolean,
        default:1
    },
    token:{
        type:String,
        default:''
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    deletedDate: {
        type: Date,
        default: null
    }
});
module.exports =  mongoose.model('sellers', sellerSchema);