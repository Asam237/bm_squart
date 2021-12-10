const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String }
})

module.exports = mongoose.model("User", UserSchema)