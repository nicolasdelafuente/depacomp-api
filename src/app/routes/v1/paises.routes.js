const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const PaisController = require(`${path.CONTROLLERS}/PaisesControllers`);


/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Paises:
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
 *                      format: binary
 *                      example: Afganistán 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *             
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /paises:
 *  post:
 *      tags:
 *          - Paises
 *      summary: Agregar un nuevo Pais
 *      description: Agregar un nuevo Pais
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Pais
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Afganistán
 *                          pais_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Pais agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Paises'
 *          '405':
 *              description: Invalid input
 * 
 */

 router.post('/', PaisController.create);

 /**
  * @swagger
  * /paises:
  *  get:
  *      tags:
  *        - Paises
  *      summary: Lista todos los Paises existentes
  *      description: Lista todos los Paises existentes
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
  *                          $ref: "#/components/schemas/Paises"
  *      responses:
  *          '200':
  *              description: Se listaron todos los Paises con exito
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
  *                                      $ref: "#/components/schemas/Paises"
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
 
 router.get('/', PaisController.get);
 
 /**
  * @swagger
  * /paises/{Id}:
  *  get:
  *     tags:
  *       - Paises
  *     summary: Buscar Pais por ID
  *     description: Buscar Pais
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Pais a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Pais por ID
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
  *                                      $ref: "#/components/schemas/Paises"
  *          '404':
  *              description: No se encontro el Pais por ID
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
  *                                          example: "No se encontro"
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
 
 router.get('/:id', PaisController.getById);
 
 /**
  * @swagger
  * /paises/{Id}:
  *  put:
  *      tags:
  *          - Paises
  *      summary: Update de un Pais existente
  *      description: Actualizacion de una Pais por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de un Pais para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de un Pais por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          nombre:
  *                              type: string
  *                              format: binary
  *                              example: Buenos Aires
  *                          pais_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo el Pais existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Paises'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: El Pais no existe
  *          '405':
  *              description: Validation exception
  */
 
router.put('/:id', PaisController.update);
 
 /**
  * @swagger
  * /pais/{Id}:
  *  delete:
  *      tags:
  *          - Paises
  *      summary: Elimina un Pais por el id
  *      description: Borra el Pais segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID del Pais para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: El Pais fue eliminado correctamente
  *          '400':
  *              description: El Pais es incorrecto
  */
 
router.delete('/:id', PaisController.destroy);

module.exports = router;