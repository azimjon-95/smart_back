const mongoose = require('mongoose');

const Certificate = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        max: 1024
    },
    surname: {
        type: String,
        required: true,
        max: 1024
    },
    teachername: {
        type: String,
        required: true,
        max: 1024
    },
    courseName: {
        type: String,
        required: true,
        max: 1024
    },
    givenDate: {
        type: String,
        required: true
    }
})

const model = mongoose.model("DriverCertificates", Certificate);
module.exports = model;