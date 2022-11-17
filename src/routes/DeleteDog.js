const {Dog, Temperament} = require('../db');
const express = require('express');
const { where } = require('sequelize');
const router = express.Router()

const deleteDog = async (id) => {
    let newDog = await Dog.findByPk(id, {include: {
        model: Temperament,
         attributes: ["name"],
         through:{
         attributes:[],
          }}
         });
    let d = await newDog.destroy()
    return d
}

router.delete('/:id', async (req, res) => {
    let {id} = req.params
    let dogb = await deleteDog(id)
    res.send(dogb)

})

const modify = async (id, weight) => {
    const dogmodify = await Dog.update ({
        weight: weight
    }, {where: { id: id}})
    return dogmodify
}

router.put('/:id', async (req, res) =>{
    let {id} = req.params
    let {weight} = req.body
    let dogm = modify(id, weight)
    res.send (dogm)
})

module.exports = router