const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: {type: String, unique: true, required: true}, 
    password: {type: String, required: true},
    roles: [{type: String, ref: "roleSchema"}]
})

module.exports = mongoose.model('userSchema', userSchema);