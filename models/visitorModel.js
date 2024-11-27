const mongoose = require("mongoose");

const Visitors = mongoose.model('visitors', {
    count: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        default: ""
    }
});

module.exports = Visitors