const express = require('express');
const router = express.Router();
const InstitutoController = require('../../controllers/InstitutosControllers');

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Institutos:
 *              type: object
 *              properties:
 *                  id: 
 *                      type: integer
 *                      example: 1
 *                  nombre: 
 *                      type: string
 *                      example: Instituto de Tecnología e Ingenieria 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *          Institutos2:
 *              type: object
 *              properties:
 *                  id: 
 *                      type: integer
 *                      example: 1
 *                  nombre: 
 *                      type: string
 *                      example: Instituto de Tecnología e Ingenieria 
 */

/**
 * @swagger
 * /institutos:
 *  post:
 *     tags:
 *       - Institutos
 *     responses:
 *       200:
 *         description: El instituto fue creada con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Institutos"
 */

router.post('/', InstitutoController.create);
router.get('/', InstitutoController.get);
router.get('/:id', InstitutoController.getById);
router.put('/:id', InstitutoController.update);
router.delete('/:id', InstitutoController.destroy);

module.exports = router;