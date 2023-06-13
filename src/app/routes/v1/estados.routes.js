const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const EstadoController = require(`${path.CONTROLLERS}/EstadosControllers.js`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Estados:
 *              required:
 *                  - nombre
 *                  - color
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  nombre:
 *                      type: string
 *                      format: binary
 *                      example: Citado
 *                  color:
 *                      type: string
 *                      format: binary
 *                      example: rgba(86,204,242,0.7)
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
 * /estados:
 *  post:
 *      tags:
 *          - Estados
 *      summary: Agregar un nuevo Estado
 *      description: Agregar un nuevo Estado
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Estado
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Citado
 *                         
 *          required: true
 *      responses:
 *          '200':
 *              description: Estado agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Estados'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', EstadoController.create);

 /**
  * @swagger
  * /estados:
  *  get:
  *      tags:
  *        - Estados
  *      summary: Lista todos los Estados existentes
  *      description: Lista todos los Estados existentes
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
  *                          $ref: "#/components/schemas/Estados"
  *      responses:
  *          '200':
  *              description: Se listaron todos los Estados con exito
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
  *                                      $ref: "#/components/schemas/Estados"
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
 
  router.get('/', EstadoController.get);
 
 /**
  * @swagger
  * /estados/{Id}:
  *  get:
  *     tags:
  *       - Estados
  *     summary: Buscar Estados por ID
  *     description: Buscar Estados
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Estados a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo el Estado por ID
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
  *                                      $ref: "#/components/schemas/Estados"
  *          '404':
  *              description: No se encontro la Estado por ID
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
 
  router.get('/:id', EstadoController.getById);
 
/**
 * @swagger
 * /estados/{Id}:
 *  put:
 *      tags:
 *          - Estados
 *      summary: Modificacion de un Estado existente
 *      description: Actualizacion de un Estado por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de un Estado para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizacion de un Estado por id
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Citado
 *                         
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Estado existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Estados'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Estado no existe
 *          '405':
 *              description: Validation exception
 */
 
 router.put('/:id', EstadoController.update);
 
 /**
  * @swagger
  * /estados/{Id}:
  *  delete:
  *      tags:
  *          - Estados
  *      summary: Elimina un Estado por el id
  *      description: Borra el Estado segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID del Estado para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: El Estado fue eliminado correctamente
  *          '400':
  *              description: El Estado es incorrecto
  */
 

router.delete('/:id', EstadoController.destroy);

module.exports = router;