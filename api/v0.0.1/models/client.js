const mongoose = require("mongoose")
const ClientSchema = new mongoose.Schema({
    name: { type: String },
    numero: { type: String },
    product: { type: String },
    price: { type: String },
    date: { type: Date, default: Date.now }
})
