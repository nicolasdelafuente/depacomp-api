const express = require('express');
const router = express.Router();
const CarreraController = require('../../controllers/CarrerasControllers');

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Carreras:
 *              required:
 *                  - nombre
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  nombre:
 *                      type: string
 *                      example: Licenciatura en Informatica 
 *                  Institutos:
 *                      $ref: '#/components/schemas/Institutos2'
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /carreras:
 *  post:
 *      tags:
 *          - Carrera
 *      summary: Agregar una nueva carrera
 *      description: Agregar una nueva carrera
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva carrera
 *          content:
 *              application/json:
 *                  schema:
 *                      id:
 *                          type: integer
 *                          format: int64
 *                          example: 1
 *                      nombre:
 *                          type: string
 *                          example: Licenciatura en Informatica 
 *                      instituto_id:
 *                          type: integer
 *                          format: int64
 *                          example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Carrera agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Carreras'
 *          '405':
 *              description: Invalid input
 */

router.post('/', CarreraController.create);

/**
 * @swagger
 * /carreras:
 *  get:
 *      tags:
 *        - Carrera
 *      summary: Lista todas las Carreras existentes
 *      description: Lista todas las Carreras existentes
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
 *                          $ref: "#/components/schemas/Carreras"
 *      responses:
 *          '200':
 *              description: Se listaron todas las carreras con exito
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
 *                                      $ref: "#/components/schemas/Carreras"
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

router.get('/', CarreraController.get);
router.get('/:id', CarreraController.getById);
router.put('/:id', CarreraController.update);
router.delete('/:id', CarreraController.destroy);

module.exports = router;