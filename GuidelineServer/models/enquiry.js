const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false,
        required: true
    },
    priority: {
        type: String,
        enum: ["urgent", "high", "normal", "low"],
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Enquiry', enquirySchema)