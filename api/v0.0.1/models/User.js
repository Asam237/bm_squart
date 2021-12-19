const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    fullName: { type: String },
    mobile: { type: String },
    adress: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    userType: { type: String, enum: ["customer", "admin"], default: "admin" },
},
    { timestamps: true }

)

module.exports = mongoose.model("User", UserSchema)