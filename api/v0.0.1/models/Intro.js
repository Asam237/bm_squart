const mongoose = require("mongoose")
const IntroSchema = new mongoose.Schema({
    content: { type: String }
})

module.exports = mongoose.model("Intro", IntroSchema)