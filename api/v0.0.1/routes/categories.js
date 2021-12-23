const Category = require("../models/category")
const router = require("express").Router()
const { verifyTokenAndAdmin } = require("./verifyToken")

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCategory = new Category({
        name: req.body.name,
        description: req.body.description
    })
    try {
        const savedCategory = await newCategory.save()
        res.status(201).json(savedCategory)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deleteCategory = await Category.findByIdAndDelete(req.params.id)
        res.status(201).json(deleteCategory)
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router