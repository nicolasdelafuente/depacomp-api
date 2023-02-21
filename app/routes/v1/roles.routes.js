const express = require('express');
const router = express.Router();
const RolController = require('../../controllers/RolesControllers');

router.post('/', RolController.create);
router.get('/', RolController.get);
router.get('/:id', RolController.getById);
router.put('/:id', RolController.update);
router.delete('/:id', RolController.destroy);

module.exports = router;