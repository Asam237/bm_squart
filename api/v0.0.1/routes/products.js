const Product = require("../models/product")
const router = require("express").Router()


router.post("/", async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        numero: req.body.numero,
        product: req.body.product,
        price: req.body.price,
        category: req.body.category
    })

    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json(deleteProduct)
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


module.exports = router