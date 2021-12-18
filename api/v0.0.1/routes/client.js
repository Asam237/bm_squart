const Client = require("../models/Client")
const route = require("express").Router()
const { verifyTokenAndAdmin } = require("./verifyToken")

route.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newClient = new Client(req.body)
    try {
        const savedClient = await newClient.save()
        res.status(201).json(savedClient)
    } catch (e) {
        res.status(500).json(e)
    }
})

route.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateClient = await Client.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(200).json(updateClient)
    } catch (e) {
        res.status(500).json(e)
    }
})

route.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deleteClient = await findByIdAndDelete(req.params.id)
        res.status(200).json("Client has been deleted...");

    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = route