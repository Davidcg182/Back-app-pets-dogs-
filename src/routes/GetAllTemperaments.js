const express = require('express')
const router = express.Router()
const {temperamentsDb} = require('../Modules/GetAllTemperaments.js')

router.get('/', async (req, res) => {
    try {
        let intento2 = await temperamentsDb()
        res.status(200).json(intento2)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router