const express = require('express');
const router = express.Router();
const SeguimientoController = require('../../controllers/SeguimientosControllers');

router.post('/', SeguimientoController.create);
router.get('/', SeguimientoController.get);
//router.get('/:id', SeguimientoController.getById);
router.get('/:id', SeguimientoController.getBySeguimientoId);
router.put('/:id', SeguimientoController.update);
router.delete('/:id', SeguimientoController.destroy);
//router.get('/orientador/:orientador_id/seguimientos', SeguimientoController.getByOrientadorId);

module.exports = router;