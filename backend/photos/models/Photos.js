const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
   
    createdDate: {
        type: Date,
        default: Date.now
    },

    imageSource: {
        type: String,  
        required: true,      
        max: 1024
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }
    
});

const Photos = mongoose.model('photos', photosSchema);

module.exports = Photos;