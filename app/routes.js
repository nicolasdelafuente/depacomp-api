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
router.post('/carreras', CarreraController.create);
router.get('/carreras', CarreraController.get);
router.get('/carreras/:id', CarreraController.getById);
router.put('/carreras/:id', CarreraController.update);
router.delete('/carreras/:id', CarreraController.destroy);

// Documentos Tipo
router.post('/documentos_tipo', DocumentosTipoController.create);
router.get('/documentos_tipo', DocumentosTipoController.get);
router.get('/documentos_tipo/:id', DocumentosTipoController.getById);
router.put('/documentos_tipo/:id', DocumentosTipoController.update);
router.delete('/documentos_tipo/:id', DocumentosTipoController.destroy);

// Entrevistas
router.post('/entrevistas', EntrevistaController.create);
router.get('/entrevistas', EntrevistaController.get);
router.get('/entrevistas/:id', EntrevistaController.getById);
router.put('/entrevistas/:id', EntrevistaController.update);
router.delete('/entrevistas/:id', EntrevistaController.destroy);

// Estados
router.post('/estados', EstadoController.create);
router.get('/estados', EstadoController.get);
router.get('/estados/:id', EstadoController.getById);
router.put('/estados/:id', EstadoController.update);
router.delete('/estados/:id', EstadoController.destroy);

// Generos
router.post('/generos', GeneroController.create);
router.get('/generos', GeneroController.get);
router.get('/generos/:id', GeneroController.getById);
router.put('/generos/:id', GeneroController.update);
router.delete('/generos/:id', GeneroController.destroy);

// Institutos
router.post('/institutos', InstitutoController.create);
router.get('/institutos', InstitutoController.get);
router.get('/institutos/:id', InstitutoController.getById);
router.put('/institutos/:id', InstitutoController.update);
router.delete('/institutos/:id', InstitutoController.destroy);

// Localidades
router.post('/localidades', LocalidadController.create);
router.get('/localidades', LocalidadController.get);
router.get('/localidades/:id', LocalidadController.getById);
router.put('/localidades/:id', LocalidadController.update);
router.delete('/localidades/:id', LocalidadController.destroy);

// Paises
router.post('/paises', PaisController.create);
router.get('/paises', PaisController.get);
router.get('/paises/:id', PaisController.getById);
router.put('/paises/:id', PaisController.update);
router.delete('/paises/:id', PaisController.destroy);

// Personas
router.post('/personas', PersonaController.create);
router.get('/personas', PersonaController.get);
router.get('/personas/:id', PersonaController.getById);
router.put('/personas/:id', PersonaController.update);
router.delete('/personas/:id', PersonaController.destroy);

// Provincias
router.post('/provincias', ProvinciaController.create);
router.get('/provincias', ProvinciaController.get);
router.get('/provincias/:id', ProvinciaController.getById);
router.put('/provincias/:id', ProvinciaController.update);
router.delete('/provincias/:id', ProvinciaController.destroy);

// Roles
router.post('/roles', RolController.create);
router.get('/roles', RolController.get);
router.get('/roles/:id', RolController.getById);
router.put('/roles/:id', RolController.update);
router.delete('/roles/:id', RolController.destroy);

// Seguimientos
router.post('/seguimientos', SeguimientoController.create);
router.get('/seguimientos', SeguimientoController.get);
router.get('/seguimientos/:id', SeguimientoController.getById);
router.put('/seguimientos/:id', SeguimientoController.update);
router.delete('/seguimientos/:id', SeguimientoController.destroy);
router.get('/orientador/:orientador_id/seguimientos', SeguimientoController.getByOrientadorId);


module.exports = router;