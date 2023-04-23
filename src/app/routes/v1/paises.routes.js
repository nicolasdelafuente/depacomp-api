const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const PaisController = require(`${path.CONTROLLERS}/PaisesControllers`);

router.post('/', PaisController.create);
router.get('/', PaisController.get);
router.get('/:id', PaisController.getById);
router.put('/:id', PaisController.update);
router.delete('/:id', PaisController.destroy);

module.exports = router;