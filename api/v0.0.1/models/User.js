const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    adress: { type: String },
    password: { type: String, required: true },
    clients: [{ type: mongoose.Types.ObjectId, ref: "Client" }],
    userType: { type: String, enum: ["customer", "admin"], default: "admin" }
},
    { timestamps: true }

)

module.exports = mongoose.model("User", UserSchema)