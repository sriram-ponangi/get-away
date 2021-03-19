/*
* Authors: 
    - Sriram, Ponangi
*/
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
        max: 1024
    },

    imageSource: {
        type: String,  
        required: true,      
        max: 1024
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    
    highlightId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'highlights',
    },

    members: [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'users',
            require: false
        }
    ],

    comments:  [
        { 
            type : mongoose.Schema.Types.ObjectId, 
            ref: 'comments',
            require: false 
        }
    ],    
  
    photos:  [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'photos',
            require: false 
        }
    ]       

});

groupSchema.index({
    name: 1,
    highlightId: 1,
  }, {
    unique: true,
  });

const Groups = mongoose.model('groups', groupSchema);

module.exports = Groups;