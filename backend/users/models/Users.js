/*
* Authors: 
    - Sriram, Ponangi
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 100
    },

    lastName: {
        type: String,
        required: true,
        max: 100
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 100
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },

    role: {
        type: String,
        default: 'USER'
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    active: {
        type: Boolean,
        default: true
    },

    currentCountryName: {
        type: String,
        required: true,
        default: 'CANADA',
        max: 100
    },

    currentLocationName: {
        type: String,
        required: true,
        default: 'NOVA SCOTIA',
        max: 100
    },

    groups: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'groups' 
        }
    ]

});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
