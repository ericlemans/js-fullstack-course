const mongoose = require('mongoose');

// other way of saying: "const Schema = mongoose.Schema;" - destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    facebookID: String,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String
})

mongoose.model('users', userSchema);
