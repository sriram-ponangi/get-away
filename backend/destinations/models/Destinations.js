const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
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

    tourist_attractions: [
        {
            title: String,
            paragraphs: [
                {
                    type: String
                }
            ]
        }
    ],

    essentials: [
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

destinationSchema.index({
    name: 1,
    location_country: 1,
    location_name: 1,
}, {
    unique: true,
});

const Destinations = mongoose.model('destinations', destinationSchema);

module.exports = Destinations;