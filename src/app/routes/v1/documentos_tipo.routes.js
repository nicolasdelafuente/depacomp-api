const express = require('express');
const router = express.Router();
const DocumentosTipoController  = require('../../controllers/DocumentosTipoControllers');

router.post('/', DocumentosTipoController.create);
router.get('/', DocumentosTipoController.get);
router.get('/:id', DocumentosTipoController.getById);
router.put('/:id', DocumentosTipoController.update);
router.delete('/:id', DocumentosTipoController.destroy);

module.exports = router;