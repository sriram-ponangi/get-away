const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },

    description: {
        type: String,
        required: true,
        max: 100
    },

    created_date: {
        type: Date,
        default: Date.now
    },

    location_country: {
        type: String,
        default: 'CANADA'
    },

    location_name: {
        type: String,
        default: 'HALIFAX, NOVA SCOTIA'
    },

    highlight: {
        type: String,
        default: 'CYCLING'
    },

    membersID: [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'usersdummies' 
        }
    ],

    commentsID:  [
        { 
            type : mongoose.Schema.Types.ObjectId, 
            ref: 'groupcomments' 
        }
    ],    
  
    imageID:  [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'groupphotos' 
        }
    ]       

});

const Groups = mongoose.model('GroupsDummy', groupSchema);

module.exports = Groups;