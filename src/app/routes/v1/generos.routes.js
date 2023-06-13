const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const GeneroController = require(`${path.CONTROLLERS}/GenerosControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Generos:
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
 *                      example: Femenino
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /generos:
 *  post:
 *      tags:
 *          - Generos
 *      summary: Agregar un nuevo genero
 *      description: Agregar un nuevo genero
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Genero
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Femenino
 *                         
 *          required: true
 *      responses:
 *          '200':
 *              description: Genero agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Generos'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', GeneroController.create);

 /**
  * @swagger
  * /generos:
  *  get:
  *      tags:
  *        - Generos
  *      summary: Lista todos los Generos existentes
  *      description: Lista todos los Generos existentes
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
  *                          $ref: "#/components/schemas/Generos"
  *      responses:
  *          '200':
  *              description: Se listaron todos los Generos con exito
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
  *                                      $ref: "#/components/schemas/Generos"
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
 
  router.get('/', GeneroController.get);
 
 /**
  * @swagger
  * /generos/{Id}:
  *  get:
  *     tags:
  *       - Generos
  *     summary: Buscar Genero por ID
  *     description: Buscar Genero
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Genero a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo el Genero por ID
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
  *                                      $ref: "#/components/schemas/Generos"
  *          '404':
  *              description: No se encontro la genero por ID
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
 
 router.get('/:id', GeneroController.getById);
 
/**
 * @swagger
 * /generos/{Id}:
 *  put:
 *      tags:
 *          - Generos
 *      summary: Modificacion de un Genero existente
 *      description: Actualizacion de un Genero por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de un Genero para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizacion de un Genero por id
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Femenino
 *                         
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Genero existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Generos'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Genero no existe
 *          '405':
 *              description: Validation exception
 */
  router.put('/:id', GeneroController.update);
 
 /**
  * @swagger
  * /generos/{Id}:
  *  delete:
  *      tags:
  *          - Generos
  *      summary: Elimina un Genero por el id
  *      description: Borra el Genero segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID del Genero para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: El Genero fue eliminado correctamente
  *          '400':
  *              description: El Genero es incorrecto
  */
 
router.delete('/:id', GeneroController.destroy);

module.exports = router;