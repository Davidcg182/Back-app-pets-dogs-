const express = require('express')
const router = express.Router()
const {newDog} = require('../Modules/CreateNewDog.js')


router.post('/', async (req, res) => {
    let {name, life_span, weight, height, image, origin, temperament} = req.body
    try {
        let newdog = await newDog(name, life_span, weight, height, image, origin, temperament);
        res.status(200).send(newdog)
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

module.exports = router