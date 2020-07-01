const mongoose = require('mongoose');

const formdataSchema = mongoose.Schema({

    image: {
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

module.exports = mongoose.model('Form', formdataSchema);