const mongoose = require("mongoose")
const ClientSchema = new mongoose.Schema({
    name: { type: String },
    product: { type: String },
    price: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Client", ClientSchema)