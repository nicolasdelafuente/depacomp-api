const express = require('express');
const router = express.Router();
const UsuarioController = require('../../controllers/UsuariosControllers');

router.post('/', UsuarioController.create);
router.get('/', UsuarioController.get);
router.get('/:id', UsuarioController.getById);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.destroy);

module.exports = router;