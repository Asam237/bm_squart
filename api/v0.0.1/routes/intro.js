const Intro = require("../models/Intro")
const router = require("express").Router()

router.post("/", async (req, res) => {
    const newIntro = new Intro(req.body)
    try {
        const savedIntro = await newIntro.save()
        res.status(200).json(savedIntro)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

module.exports = router