const mongoose = require('mongoose');

// other way of saying: "const Schema = mongoose.Schema;" - destructuring
const { Schema } = mongoose;

const recipientSchema = new Schema({
   email: String,
   responded: { type: Boolean, default: false }
});

module.exports =recipientSchema;