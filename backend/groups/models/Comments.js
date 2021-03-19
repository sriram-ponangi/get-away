/*
* Authors: 
    - Rajni, Puni
*/
const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        max: 1024
    },
   
    createdDate: {
        type: Date,
        default: Date.now
    },
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }
    
});

const Comments = mongoose.model('comments', commentsSchema);

module.exports = Comments;