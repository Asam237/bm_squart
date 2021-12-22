const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    name: { type: String },
    numero: { type: Number },
    product: { type: String },
    price: { type: Number },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
})

module.exports = mongoose.model("Product", ProductSchema)