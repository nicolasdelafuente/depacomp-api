const express = require('express');
const router = express.Router();
const InstitutoController = require('../../controllers/InstitutosControllers');

router.post('/', InstitutoController.create);
router.get('/', InstitutoController.get);
router.get('/:id', InstitutoController.getById);
router.put('/:id', InstitutoController.update);
router.delete('/:id', InstitutoController.destroy);

module.exports = router;