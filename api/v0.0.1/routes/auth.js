const User = require("../models/User")
const router = require("express").Router()
const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js")

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        adress: req.body.adress,
        password: req.body.password
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password;

        originalPassword != inputPassword &&
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router