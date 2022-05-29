const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    code: String,
    first_name: String,
    last_name: String,
    mail: String,
    major: String
})

module.exports = mongoose.model('Student', studentSchema)