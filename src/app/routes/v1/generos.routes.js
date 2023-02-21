const express = require('express');
const router = express.Router();
const GeneroController = require('../../controllers/GenerosControllers');

router.post('/', GeneroController.create);
router.get('/', GeneroController.get);
router.get('/:id', GeneroController.getById);
router.put('/:id', GeneroController.update);
router.delete('/:id', GeneroController.destroy);

module.exports = router;