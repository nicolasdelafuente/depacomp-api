const express = require('express');
const router = express.Router();
const CarreraController = require('../../controllers/CarrerasControllers');

router.post('/', CarreraController.create);
router.get('/', CarreraController.get);
router.get('/:id', CarreraController.getById);
router.put('/:id', CarreraController.update);
router.delete('/:id', CarreraController.destroy);

module.exports = router;