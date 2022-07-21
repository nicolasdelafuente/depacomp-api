const express = require('express');
const router = express.Router();

// Importar controladores
const PaisController = require('./controllers/PaisesControllers');
const PersonaController = require('./controllers/PersonasControllers');
const ProvinciaController = require('./controllers/ProvinciasControllers');

// Home
router.get('/', (_, res) => res.json({foo: "bar"}))

// Paises
router.get('/paises', PaisController.all);

// Personas
router.get('/personas', PersonaController.all);

// Provincias
router.get('/provincias', ProvinciaController.all);

module.exports = router;