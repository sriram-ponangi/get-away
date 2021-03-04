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

    created_date: {
        type: Date,
        default: Date.now
    },

    active: {
        type: Boolean,
        default: true
    },

    current_country: {
        type: String,
        required: true,
        default: 'CANADA',
        max: 100
    },

    current_state: {
        type: String,
        required: true,
        default: 'NOVA SCOTIA',
        max: 100
    },

    my_groups: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'groupsdummies' 
        }
    ]

});

const Users = mongoose.model('UsersDummy', userSchema);

module.exports = Users;
