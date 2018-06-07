const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = Schema({
    name: String,
    sex: String,
    age: Number
});

let studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;