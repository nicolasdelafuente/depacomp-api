const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const EstadoController = require(`${path.CONTROLLERS}/EstadosControllers.js`);

router.post('/', EstadoController.create);
router.get('/', EstadoController.get);
router.get('/:id', EstadoController.getById);
router.put('/:id', EstadoController.update);
router.delete('/:id', EstadoController.destroy);

module.exports = router;