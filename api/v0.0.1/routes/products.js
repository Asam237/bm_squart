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


module.exports = router