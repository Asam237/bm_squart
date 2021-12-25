const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    date: { type: Date, default: Date.now }
})
module.exports = mongoose.model("User", UserSchema)