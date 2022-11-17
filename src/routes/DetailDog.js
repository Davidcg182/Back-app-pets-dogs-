const {detailDogDb, detailDogApi} = require('../Modules/DetailDog.js')
const express = require('express')
const router = express.Router()


router.get('/:id', async (req,res) => {
    let {id} = req.params;
    try {
        let apiFn = await detailDogApi(id)
        if(apiFn) { return res.send(await detailDogApi(id))}
        else res.send(await detailDogDb(id))
        
    } catch (e) {
        res.status(400).send({Error: e.message})
    }
})

module.exports = router