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

    image_src: {
        type: String,  
        required: true,      
        max: 1024
    },

    created_date: {
        type: Date,
        default: Date.now
    },

    location_country: {
        type: String,
        required: true,
        max: 100
    },

    location_name: {
        type: String,
        required: true,
        max: 100
    },

    highlight: {
        type: String,
        required: true,
        max: 100
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
            ref: 'groupcomments',
            require: false 
        }
    ],    
  
    images:  [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref: 'groupphotos',
            require: false 
        }
    ]       

});

groupSchema.index({
    name: 1,
    location_country: 1,
    location_name: 1,
    highlight: 1,
  }, {
    unique: true,
  });

const Groups = mongoose.model('groups', groupSchema);

module.exports = Groups;