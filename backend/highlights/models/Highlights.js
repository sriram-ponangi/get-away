const mongoose = require('mongoose');

const highlishtSchema = new mongoose.Schema({
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

    destinationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'destinations',
    },

    about: [
        {
            title: String,
            paragraphs: [
                {
                    type: String
                }
            ]
        }
    ],      

});

highlishtSchema.index({
    name: 1,
    destinationId: 1
  }, {
    unique: true,
  });

const Highlights = mongoose.model('highlights', highlishtSchema);

module.exports = Highlights;