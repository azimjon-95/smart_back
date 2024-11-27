const mongoose = require('mongoose');

const Telegram = new mongoose.Schema({
    info: {
        type: Object,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },


})

const model = mongoose.model("telegram", Telegram);
module.exports = model;