const mongoose = require('mongoose');

const JS = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    teachername: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    givenDate: {
        type: String,
        required: true
    }
})

const model = mongoose.model("JS", JS);
module.exports = model;