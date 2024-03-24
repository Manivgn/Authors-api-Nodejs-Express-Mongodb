const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    fullName : {
        type: String,
        required : true
    },
    year_Born : {
        type: Number,
        required : true

    },
    technology : {
        type : String ,
        required : true 
    }
})

module.exports = mongoose.model('Author', authorSchema)