const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const authRoute = require("./routes/auth")
const categoryRoute = require("./routes/categories")
const productRoute = require("./routes/products")


app.use(cors())
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Databases
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("[Database] : Connection successfull"))
    .catch(e => console.log(e))

// Routes
app.use("/api/auth", authRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/products", productRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is runnig !")
})
