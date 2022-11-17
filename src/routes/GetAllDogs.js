const express = require('express')
const {allDogs} = require('../Modules/GetAllDogs.js')
const router = express.Router()


router.get('/', async (req,res) => {
    try {
        let {name} = req.query
        let dogApi = await allDogs()
        if(name) {
          let x = await dogApi.filter (e => {return e.name.toLowerCase().includes(name.toLowerCase())})
          res.json(x)
         }
        else return res.json(dogApi)
    } catch (e) {
        res.send({error: e.message})   
    }
}) 

module.exports = router