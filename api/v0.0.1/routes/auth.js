const User = require("../models/User")
const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js")
const router = require("express").Router()
const bcrypt = require("bcryptjs")


router.post("/register", async (req, res) => {
    console.log("email", req.body)
    const newUser = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        mobile: req.body.mobile,
        adress: req.body.adress,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: true
    });
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/login', async (req, res) => {
    const secret = process.env.PASS_SEC;
    try {
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        !user && res.status(401).json("Wrong User Name");

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    userId: user.id,
                    isAdmin: user.isAdmin
                },
                "Abbasali97",
                { expiresIn: '3d' }
            )

            res.status(200).send({ user: user, token: token })


        }
    }

    catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router