const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const SeguimientoTipoController  = require(`${path.CONTROLLERS}/SeguimientoTiposControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Seguimiento Tipos:
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
 *                      example: Entrevista 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /seguimientoTipos:
 *  post:
 *      tags:
 *          - Seguimiento Tipos
 *      summary: Agregar un nuevo Tipo de Seguimiento
 *      description: Agregar un nuevo Tipo de Seguimiento
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Tipo de Seguimiento
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Entrevista
 *          required: true
 *      responses:
 *          '200':
 *              description: Tipo de Seguimiento agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Seguimiento Tipos'
 *          '405':
 *              description: Invalid input
 */

router.post('/', SeguimientoTipoController.create);

/**
 * @swagger
 * /seguimientoTipos:
 *  get:
 *      tags:
 *        - Seguimiento Tipos
 *      summary: Lista los Tipo de Seguimiento existentes
 *      description: Lista los Tipo de Seguimiento existentes
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
 *                          $ref: '#/components/schemas/Seguimiento Tipos'
 *      responses:
 *          '200':
 *              description: Se listaron todos los Tipos de Seguimiento con exito
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
 *                                      $ref: "#/components/schemas/Seguimiento Tipos"
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

router.get('/', SeguimientoTipoController.get);

/**
 * @swagger
 * /seguimientoTipos/{Id}:
 *  get:
 *     tags:
 *       - Seguimiento Tipos
 *     summary: Buscar Tipo de Seguimiento por ID
 *     description: Buscar Tipo de Seguimiento
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Tipo de Seguimiento a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se encontro el Tipo de Seguimiento por ID solicitado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Seguimiento Tipos'
 *          '400':
 *              description: ID suministrado invalido
 *          '404':
 *              description: No existe el Tipo de Seguimiento del id especificado
 */

router.get('/:id', SeguimientoTipoController.getById);

/**
 * @swagger
 * /seguimientoTipos/{Id}:
 *  put:
 *      tags:
 *          - Seguimiento Tipos
 *      summary: Update de un Tipo de Seguimiento existente
 *      description: Actualizacion de un Tipo de Seguimiento por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de Tipo de Seguimiento para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizar un Tipo de Seguimiento de los existentes
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Entrevista
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Seguimiento existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Seguimiento Tipos'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Tipo de Seguimiento no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', SeguimientoTipoController.update);

/**
 * @swagger
 * /seguimientoTipos/{Id}:
 *  delete:
 *      tags:
 *          - Seguimiento Tipos
 *      summary: Elimina un Tipo de Seguimiento
 *      description: Borra el Tipo de Seguimiento
 *      operationId: destroy
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de Tipo de Seguimiento para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: El Tipo de Seguimiento fue eliminado correctamente
 *          '400':
 *              description: Tipo de Seguimiento incorrecto
 */

router.delete('/:id', SeguimientoTipoController.destroy);

module.exports = router;