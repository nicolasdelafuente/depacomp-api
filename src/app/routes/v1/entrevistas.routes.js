const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const EntrevistaController = require(`${path.CONTROLLERS}/EntrevistasControllers`);


/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Entrevistas:
 *              required:
 *                  - observaciones
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  observaciones:
 *                      type: string
 *                      format: binary
 *                      example: 'Un exito'
 *                  acciones:
 *                      type: string
 *                      format: binary
 *                      example: 'Un exito'
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  Seguimientos:
 *                      $ref: '#/components/schemas/Seguimientos'
 */


/**
 * @swagger
 * /entrevistas:
 *  post:
 *      tags:
 *          - Entrevistas
 *      summary: Agregar una nueva Entrevista
 *      description: Agregar una nueva Entrevista
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Entrevista
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          observaciones:
 *                              type: string
 *                              format: binary
 *                              example: Un exito
 *                          acciones:
 *                              type: string
 *                              format: binary
 *                              example: Un exito
 *                          seguimiento_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          entrevistador_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Entrevista agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Entrevistas'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', EntrevistaController.create);

 /**
  * @swagger
  * /entrevistas:
  *  get:
  *      tags:
  *        - Entrevistas
  *      summary: Lista todas las Entrevistas existentes
  *      description: Lista todas las Entrevistas existentes
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
  *                          $ref: "#/components/schemas/Entrevistas"
  *      responses:
  *          '200':
  *              description: Se listaron todas las Entrevistas con exito
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
  *                                      $ref: "#/components/schemas/Entrevistas"
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
 
 router.get('/', EntrevistaController.get);
 
 /**
  * @swagger
  * /entrevistas/{Id}:
  *  get:
  *     tags:
  *       - Entrevistas
  *     summary: Buscar Entrevista por ID
  *     description: Buscar Entrevista
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Entrevista a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Entrevista por ID
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
  *                                      $ref: "#/components/schemas/Entrevistas"
  *          '404':
  *              description: No se encontro la Entrevista por ID
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
 
 router.get('/:id', EntrevistaController.getById);
 
 /**
  * @swagger
  * /seguimientos/{Id}:
  *  get:
  *     tags:
  *       - Entrevistas
  *     summary: Buscar Entrevista por ID de Seguimiento
  *     description: Buscar Entrevistas
  *     operationId: getBySeguimiento
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Entrevistas a devolver por ID de Seguimiento
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Entrevistas por ID de Seguimiento
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
  *                                      $ref: "#/components/schemas/Entrevistas"
  *          '404':
  *              description: No se encontraron las Entrevistas por ID de Seguimiento
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
 router.get('/seguimientos/:id', EntrevistaController.getBySeguimiento);


 /**
  * @swagger
  * /entrevistas/{Id}:
  *  put:
  *      tags:
  *          - Entrevistas
  *      summary: Update de una Entrevista existente
  *      description: Actualizacion de una Entrevista por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de una Entrevista para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de una Entrevista por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          observaciones:
  *                              type: string
  *                              format: binary
  *                              example: Un exito
  *                          acciones:
  *                              type: string
  *                              format: binary
  *                              example: nueva visita la semana que viene
  *                          seguimiento_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo la Entrevista existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Entrevistas'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: La Entrevista no existe
  *          '405':
  *              description: Validation exception
  */
 
 router.put('/:id', EntrevistaController.update);
 
 /**
  * @swagger
  * /entrevistas/{Id}:
  *  delete:
  *      tags:
  *          - Entrevistas
  *      summary: Elimina una Entrevista por el id
  *      description: Borra la Entrevista segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de la Entrevista para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: La Entrevista fue eliminada correctamente
  *          '400':
  *              description: La Entrevista es incorrecta
  */

 router.delete('/:id', EntrevistaController.destroy);

module.exports = router;