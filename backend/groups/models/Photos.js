/*
* Authors: 
    - Rajni, Puni  
*/
const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
    createdDate: {
        type: Date,
        default: Date.now
    },

    imageSource: {
        type: String,  
        required: true
    }
    
});

const Photos = mongoose.model('photos', photosSchema);

module.exports = Photos;