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
 *              properties:
 *                  instituto_id: 
 *                      type: integer
 *                      example: 1
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

/**
 * @swagger
 * /institutos:
 *  get:
 *      tags:
 *        - Institutos
 *      summary: Lista todos los institutos existentes
 *      description: Lista todos los institutos existentes
 *      operationId: get
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *              properties:
 *                  status:
 *                      type: string
 *                      example: OK
 *                  data:
 *                      type: array 
 *                      items: 
 *                          $ref: "#/components/schemas/Institutos"
 *      responses:
 *          '200':
 *              description: Se todos los institutos existentes con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: OK
 *                              data:
 *                                  type: array 
 *                                  items: 
 *                                      $ref: "#/components/schemas/Institutos"
 *          '404':
 *              description: No se encontraron
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: NOT FOUND
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      error:
 *                                          type: string 
 *                                          example: "No se encontraron"
 *          '500':
 *              description: FAILED
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                                  example: FAILED
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      error:
 *                                          type: string 
 *                                          example: "FAILED"
 */


router.get('/', InstitutoController.get);



router.get('/:id', InstitutoController.getById);



router.put('/:id', InstitutoController.update);



router.delete('/:id', InstitutoController.destroy);

module.exports = router;