// IMPORTING MONGOOSE 

const mongoose = require ("mongoose")

// CREATING USER SCHEMA

const StudentSchema = new mongoose.Schema ({
    naame : String ,
    number : Number ,
    course : String ,
})

let Student = mongoose.model ("Student",StudentSchema)

// EXPORTING THE USER MODEL

module.exports = Student