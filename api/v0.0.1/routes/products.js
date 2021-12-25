const Product = require("../models/product")
const router = require("express").Router()
const { verifyTokenAndAdmin } = require("./verifyToken")


router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("delete product")
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qProduct = req.query.product;
    try {
        let Products;

        if (qNew) {
            Clients = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qProduct) {
            Products = await Product.find({
                products: {
                    $in: [qProduct],
                },
            });
        } else {
            Products = await Product.find().populate();
        }

        res.status(200).json(Products);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(200).json(updateProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})


module.exports = router