const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    institution: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "College"
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["online", "offline", "hybrid"],
        required:true
    },
    fee: {
        type: Number,
    },
    admission_fee: {
        type: Number,
    },
    duration: {
        type: String,
    },
    fastrack: {
        type: String,
    },
    semester: {
        type: Number,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
},
{
    timestamps: true
})
module.exports = mongoose.model('Course', courseSchema)