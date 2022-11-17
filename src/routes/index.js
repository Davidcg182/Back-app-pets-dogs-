const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllDogs = require('./GetAllDogs.js')
const detailDogs = require('./DetailDog.js')
const getTemperaments = require ('./GetAllTemperaments')
const newDog = require('./CreateNewDog.js')
const deleteDog = require('./DeleteDog')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getAllDogs, detailDogs, newDog, deleteDog)
router.use('/temperaments', getTemperaments)


module.exports = router;
