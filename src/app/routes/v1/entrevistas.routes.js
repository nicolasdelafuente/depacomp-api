const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const EntrevistaController = require(`${path.CONTROLLERS}/EntrevistasControllers`);

router.post('/', EntrevistaController.create);
router.get('/', EntrevistaController.get);
router.get('/:id', EntrevistaController.getById);
router.put('/:id', EntrevistaController.update);
router.delete('/:id', EntrevistaController.destroy);

module.exports = router;