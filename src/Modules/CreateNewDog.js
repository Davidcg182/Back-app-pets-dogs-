const {Temperament, Dog} = require('../db')


const newDog = async (name, life_span, weight, height, image, origin, temperament) => {
    if (!name || !weight || !height) {
        throw new Error ('please enter a name, weight and height')
    }
    let attributes = {
        name: name,
        life_span: life_span,
        weight: weight,
        height: height,
        image: image,
        origin: origin,
        
    }
    let newDogDb = await Dog.create(attributes)
    //console.log(temperament)
    let temperament1 = await Temperament.findAll({
        where: {name : temperament}
    })
    newDogDb.addTemperament(temperament1)
    return newDogDb
}

module.exports = {newDog}