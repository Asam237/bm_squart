const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path")
const userRoute = require("./routes/auth")


mongoose
    .connect("mongodb://localhost:27017/MyTest")
    .then(() => console.log("DB connection successfull!"))
    .catch((err) => {
        console.log(err)
    })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/api/auth", userRoute)
app.listen(process.env.PORT || 5000, () => {
    console.log('BackEnd server is running!')
})