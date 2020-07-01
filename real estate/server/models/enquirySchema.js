const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: Number,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },

})

module.exports = mongoose.model('Enquiry', enquirySchema);