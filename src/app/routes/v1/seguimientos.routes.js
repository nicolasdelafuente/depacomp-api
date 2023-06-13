const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const SeguimientoController = require(`${path.CONTROLLERS}/SeguimientosControllers`);

//router.get('/orientador/:orientador_id/seguimientos', SeguimientoController.getByOrientadorId);
//router.get('/:id', SeguimientoController.getById);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Seguimientos:
 *              required:
 *                  - motivo
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  motivo:
 *                      type: string
 *                      format: binary
 *                      example: Motivo_1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  Categorias:
 *                      $ref: '#/components/schemas/Categorias'
 *                  Estados:
 *                      $ref: '#/components/schemas/Estados'
 *                  Entrevistas:
 *                      $ref: '#/components/schemas/Entrevistas'
 */

/**
 * @swagger
 * /seguimientos:
 *  post:
 *      tags:
 *          - Seguimientos
 *      summary: Agregar un nuevo Seguimiento
 *      description: Agregar un nuevo Seguimiento
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Seguimiento
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          motivo:
 *                              type: string
 *                              format: binary
 *                              example: Motivo_1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 *                          categoria_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          estado_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          entrevista_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Seguimiento agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref:'#/components/schemas/Seguimientos'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', SeguimientoController.create);

 /**
  * @swagger
  * /seguimientos:
  *  get:
  *      tags:
  *        - Seguimientos
  *      summary: Lista todos los Seguimientos existentes
  *      description: Lista todos los Seguimientos existentes
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
  *                          $ref: "#/components/schemas/Seguimientos"
  *      responses:
  *          '200':
  *              description: Se listaron todos los Seguimientos con exito
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
  *                                      $ref: "#/components/schemas/Seguimientos"
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
 
 router.get('/', SeguimientoController.get);
 
 /**
  * @swagger
  * /seguimientos/{Id}:
  *  get:
  *     tags:
  *       - Seguimientos
  *     summary: Buscar Seguimiento por ID
  *     description: Buscar Seguimiento
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Seguimiento a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo el Seguimiento por ID
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
  *                                      $ref: "#/components/schemas/Seguimientos"
  *          '404':
  *              description: No se encontro el Seguimiento por ID
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
 
 router.get('/:id', SeguimientoController.getById);
 

 /**
  * @swagger
  * /seguimientos/{Id}:
  *  put:
  *      tags:
  *          - Seguimientos
  *      summary: Update de un Seguimiento existente
  *      description: Actualizacion de un Seguimiento por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de un Seguimiento para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de un Seguimiento por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          motivo:
  *                              type: string
  *                              format: binary
  *                              example: jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
  *                          categoria_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *                          estado_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *                          entrevista_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo de un Seguimiento existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Seguimientos'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: El Seguimiento no existe
  *          '405':
  *              description: Validation exception
  */
 
 router.put('/:id', SeguimientoController.update);
 
 /**
  * @swagger
  * /seguimientos/{Id}:
  *  delete:
  *      tags:
  *          - Seguimientos
  *      summary: Elimina el Seguimiento por id
  *      description: Borra el Seguimiento segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID del Seguimiento para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: El Seguimiento fue eliminado correctamente
  *          '400':
  *              description: El Seguimiento es incorrecto
  */
 
 router.delete('/:id', SeguimientoController.destroy);

module.exports = router;