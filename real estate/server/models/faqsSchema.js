const mongoose = require('mongoose');

const faqsSchema = mongoose.Schema({

    question:{
        type: String,
        required: true
        
    },
    answer:{
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

module.exports = mongoose.model('Faqs', faqsSchema);