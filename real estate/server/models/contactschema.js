const mongoose = require('mongoose');

const contactusSchema = mongoose.Schema({

    address: {
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    email:{
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

module.exports = mongoose.model('Contact', contactusSchema);