const mongoose = require('mongoose');

const potentialSchema = mongoose.Schema({

    title:{
        type: String,
        
    },description:{
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

module.exports = mongoose.model('Potential', potentialSchema);