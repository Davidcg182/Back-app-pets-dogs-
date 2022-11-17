const axios = require('axios')
const {api_key} = process.env
const {Dog, Temperament} = require('../db.js')

const dogsApi = async () => {
    let listDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
    let infoDog = await listDogs.data.map(e => {
        if (e.temperament) {
            let temp =  e.temperament.split(',').map(e => {return {name:e.trim()}})
            return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric,
                temperaments: temp,
                image: e.image.url,
            }
           }
            else return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric,
                temperaments: e.temperament,
                image: e.image.url,
            }
    })
   return infoDog
}

const dogsDb = async () => {
 let allDogsDb = await Dog.findAll({attributes:
 ['name', 'image', 'weight', 'id'],
  include: {
   model: Temperament,
    attributes: ["name"],
    through:{
    attributes:[],
     }
    }
});

    return allDogsDb
}

const allDogs = async () => {
    let DogsApi = await dogsApi()
    let DogsDb = await dogsDb()
    let AllDogs = DogsApi.concat(DogsDb)
    return AllDogs
}

module.exports = {allDogs}

