const express = require('express');
const router = express.Router();

// Importar controladores
const CarreraController = require('./controllers/CarrerasControllers');
const DocumentosTipoController = require('./controllers/DocumentosTipoControllers');
const EntrevistaController = require('./controllers/EntrevistasControllers');
const EstadoController = require('./controllers/EstadosControllers');
const GeneroController = require('./controllers/GenerosControllers');
const InstitutoController = require('./controllers/InstitutosControllers');
const LocalidadController = require('./controllers/LocalidadesControllers');
const PaisController = require('./controllers/PaisesControllers');
const PersonaController = require('./controllers/PersonasControllers');
const ProvinciaController = require('./controllers/ProvinciasControllers');
const RolController = require('./controllers/RolesControllers');
const SeguimientoController = require('./controllers/SeguimientosControllers');

// Home
router.get('/', (_, res) => res.json({foo: "bar"}))

// Carreras
router.post('/carreras', CarreraController.create)
router.get('/carreras', CarreraController.get);
router.get('/carreras/:id', CarreraController.getById);
router.put('/carreras/:id', CarreraController.update)
router.delete('/carreras/:id', CarreraController.destroy)

// Documentos Tipo
router.get('/documentos_tipo', DocumentosTipoController.get);

// Entrevistas
router.get('/entrevistas', EntrevistaController.get);

// Estados
router.get('/estados', EstadoController.get);

// Generos
router.get('/generos', GeneroController.get);

// Institutos
router.get('/institutos', InstitutoController.get);

// Localidades
router.get('/localidades', LocalidadController.get);

// Paises
router.get('/paises', PaisController.get);

// Personas
router.get('/personas', PersonaController.get);

// Provincias
router.get('/provincias', ProvinciaController.get);

// Roles
router.get('/roles', RolController.get);

// Seguimientos
router.get('/seguimientos', SeguimientoController.get);


module.exports = router;