const axios = require ('axios')
const {api_key} = process.env
const {Temperament} = require('../db')


const temperamentsDb = async () => {
    
    let listDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
    let apiTemperaments = listDogs.data.map(e => {
            return e.temperament
         });
         let arrTemperaments = apiTemperaments.join(',').split(',')
         let orderarrTemperaments = arrTemperaments.map(e => {
             return e.trim()
         })
         let allTemperaments = []   
         orderarrTemperaments.forEach(e => {
             if (!allTemperaments.includes(e) && e !== '') {
                allTemperaments.push(e)
             }
         })
         allTemperaments.forEach(e => {
             Temperament.findOrCreate({
                 where: {name: e}
             })
         })
         let allDbTemperaments = await Temperament.findAll()
         return allDbTemperaments
}


module.exports = {temperamentsDb}