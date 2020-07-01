const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
        
    },
    contact: {
        type: Number,
        required: true,
        min:10
    },
    email: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    projectImage:{
        type: String,
        required: true,
        
    },
    brochure:{
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

module.exports = mongoose.model('Project', projectSchema);