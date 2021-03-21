const mongoose = require('mongoose');

// category: 'Fishing',
//       title: 'Waterfront',
//       text: "is an amazing place to find salmon, catfish, king fish.",
//       imSrc: "/highlights/fish1.jpg",
//       desc: "Lorem ipsum dolor sit amet, consectetuer adipisc

const location = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        max: 100
    },

    text: {
        type: String,
        required: true,
        max: 1024
    },

    desc: {
        type: String,
        required: true,
        max: 5000
    },

    imSrc: {
        type: String,
        required: true,
        max: 1024
    }

});

const highlihtsSchema = new mongoose.Schema({
    destinationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'destinations',
    },

    category: {
        type: String,
        required: true,
        max: 100
    },

    locations: {
        type: [location],
        required: true,
    }
})

// highlihtsSchema.index({
//     destinationId: 1
// }, {
//     unique: false,
// });

const Highlights = mongoose.model('highlights', highlihtsSchema);

module.exports = Highlights;