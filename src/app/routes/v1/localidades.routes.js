const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const LocalidadController = require(`${path.CONTROLLERS}/LocalidadesControllers`);

router.post('/', LocalidadController.create);
router.get('/', LocalidadController.get);
router.get('/:id', LocalidadController.getById);
router.put('/:id', LocalidadController.update);
router.delete('/:id', LocalidadController.destroy);

module.exports = router;