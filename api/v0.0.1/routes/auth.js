const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = require("express").Router()

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (e) {
        res.status(500).json(e)
    }
})


router.post("/login", async (req, res) => {
    const secret = process.env.SECRET
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!user) {
            res.status(400).json(message: "The user not found !")
        }
        if (user && bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    userId: user.id
                },
                secret,
                { expiresIn: "1d" }
            )
            res.status(201).json({ user: user, token: token })
        } else {
            res.status(400).json(message: "Wrong password !")
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router