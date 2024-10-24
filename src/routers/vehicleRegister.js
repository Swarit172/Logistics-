const express = require('express')
const Vehicle = require('../models/vehicleRegister')
const router = new express.Router()


router.post('/vehicle', async (req,res) => {
    const data = new Vehicle(req.body)

    try {
        await data.save()
        res.status(201).redirect('/')
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router
