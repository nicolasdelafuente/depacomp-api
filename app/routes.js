const express = require('express');
const router = express.Router();

// Importar controladores
const PaisController = require('./controllers/paisesControllers');
const PersonaController = require('./controllers/personasControllers');

// Home
router.get('/', (_, res) => res.json({foo: "bar"}))

// Paises
router.get('/paises', PaisController.all);

// Personas
router.get('/personas', PersonaController.all);

module.exports = router;