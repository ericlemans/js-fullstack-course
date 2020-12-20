const mongoose = require('mongoose');

// other way of saying: "const Schema = mongoose.Schema;" - destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    facebookID: String,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    credits: { type: Number, default: 0 },

})

mongoose.model('users', userSchema);
