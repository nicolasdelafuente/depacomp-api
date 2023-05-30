const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const CategoriaController = require(`${path.CONTROLLERS}/CategoriasControllers`);

router.post('/', CategoriaController.create);
router.get('/', CategoriaController.get);
router.get('/:id', CategoriaController.getById);
router.put('/:id', CategoriaController.update);
router.delete('/:id', CategoriaController.destroy);

module.exports = router;