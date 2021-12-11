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

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qIntro = req.query.intro;
    try {
        let Intros;

        if (qNew) {
            Intros = await Intro.find().sort({ createdAt: -1 }).limit(1);
        } else if (qIntro) {
            Intros = await Intro.find({
                intros: {
                    $in: [qIntro],
                },
            });
        } else {
            Intros = await Intro.find().populate();
        }

        res.status(200).json(Intros);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


module.exports = router