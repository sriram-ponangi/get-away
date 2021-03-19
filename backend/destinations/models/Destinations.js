/*
* Authors: 
    - Sriram, Ponangi
*/
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

    imageSource: {
        type: String,
        required: true,
        max: 1024
    },

    countryName: {
        type: String,
        required: true,
        max: 100
    },

    locationName: {
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

    touristAttractions: [
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
    countryName: 1,
    locationName: 1,
}, {
    unique: true,
});

const Destinations = mongoose.model('destinations', destinationSchema);

module.exports = Destinations;