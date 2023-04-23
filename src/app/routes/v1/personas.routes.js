const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const PersonaController = require(`${path.CONTROLLERS}/PersonasControllers`);

router.post('/', PersonaController.create);
router.get('/', PersonaController.get);
router.get('/:id', PersonaController.getById);
router.put('/:id', PersonaController.update);
router.delete('/:id', PersonaController.destroy);

module.exports = router;