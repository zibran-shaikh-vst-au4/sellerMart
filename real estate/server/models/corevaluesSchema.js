const mongoose = require('mongoose');

const corevaluesSchema = mongoose.Schema({

    description:{
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

module.exports = mongoose.model('Corevalues', corevaluesSchema);