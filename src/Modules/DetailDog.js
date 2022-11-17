const axios = require ('axios')
const {api_key} = process.env
const {Temperament, Dog} = require('../db')


const detailDogApi = async (id) => {
    let listDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
    let infoDog = await listDogs.data.map(e => {
        if (e.temperament) {
            let temp =  e.temperament.split(',').map(e => {return {name:e.trim()}})
            return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric,
                height: e.height.metric,
                life_span: e.life_span,
                temperaments: temp,
                origin: e.origin,
                image: e.image.url,
            }
           }
            else return {
                id: e.id,
                name: e.name,
                weight: e.weight.metric,
                height: e.height.metric,
                life_span: e.life_span,
                temperaments: e.temperament,
                image: e.image.url,
            }
    })
    let dogId = await infoDog.find(e=> e.id == id)
    return dogId
}

const detailDogDb = async (id) => {
    let allDogsDb = await Dog.findByPk(
        id, 
        {
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

module.exports = {detailDogDb, detailDogApi}
