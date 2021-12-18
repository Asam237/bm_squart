const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    adress: { type: String },
    password: { type: String },
    userType: { type: String, enum: ["customer", "admon"], default: "customer" }
})

module.exports = mongoose.model("User", UserSchema)