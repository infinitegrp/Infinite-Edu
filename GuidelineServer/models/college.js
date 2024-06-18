const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   abbreviation : {
      type:String,
      required:true
   },
   location : {
      type:String,
      required:true
   },
   desc: {
      type: String,
   },
   image: {
      type: String,
   },
   courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courses'
   }],
   isAvailable: {
      type: Boolean,
      default: true
   },
},
   {
      timestamps: true
   })

module.exports = mongoose.model('College', collegeSchema)