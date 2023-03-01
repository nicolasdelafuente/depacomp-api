const express = require('express');
const router = express.Router();
const ProvinciaController = require('../../controllers/ProvinciasControllers');

router.post('/', ProvinciaController.create);
router.get('/', ProvinciaController.get);
router.get('/:id', ProvinciaController.getById);
router.put('/:id', ProvinciaController.update);
router.delete('/:id', ProvinciaController.destroy);

module.exports = router;