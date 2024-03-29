const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const DocumentoTipoController  = require(`${path.CONTROLLERS}/DocumentoTiposControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Documento Tipos:
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
 *                      example: DNI 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /documentoTipos:
 *  post:
 *      tags:
 *          - Documento Tipos
 *      summary: Agregar un nuevo Tipo de Documento
 *      description: Agregar un nuevo Tipo de Documento
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Tipo de Documento
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: DNI
 *          required: true
 *      responses:
 *          '200':
 *              description: Tipo de documento agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Documento Tipos'
 *          '405':
 *              description: Invalid input
 */

router.post('/', DocumentoTipoController.create);

/**
 * @swagger
 * /documentoTipos:
 *  get:
 *      tags:
 *        - Documento Tipos
 *      summary: Lista los Tipo de Documentos existentes
 *      description: Lista los Tipo de Documentos existentes
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
 *                          $ref: '#/components/schemas/Documento Tipos'
 *      responses:
 *          '200':
 *              description: Se listaron todos los Tipos de Documentos con exito
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
 *                                      $ref: "#/components/schemas/Documento Tipos"
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

router.get('/', DocumentoTipoController.get);

/**
 * @swagger
 * /documentoTipos/{Id}:
 *  get:
 *     tags:
 *       - Documento Tipos
 *     summary: Buscar Tipo de Documento por ID
 *     description: Buscar Tipo de Documento
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Tipo de Documento a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se encontro el Tipo de Documento por ID solicitado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Documento Tipos'
 *          '400':
 *              description: ID suministrado invalido
 *          '404':
 *              description: No existe el Tipo de Documento del id especificado
 */

router.get('/:id', DocumentoTipoController.getById);

/**
 * @swagger
 * /documentoTipos/{Id}:
 *  put:
 *      tags:
 *          - Documento Tipos
 *      summary: Update de un Tipo de Documento existente
 *      description: Actualizacion de un Tipo de Documento por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de Tipo de Documento para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizar un Tipo de Documento de los existentes
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: DNI
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el documento existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Documento Tipos'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Tipo de Documento no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', DocumentoTipoController.update);

/**
 * @swagger
 * /documentoTipos/{Id}:
 *  delete:
 *      tags:
 *          - Documento Tipos
 *      summary: Elimina un Tipo de Documento
 *      description: Borra el Tipo de Documento
 *      operationId: destroy
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de Tipo de Documento para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: El Tipo de Documento fue eliminado correctamente
 *          '400':
 *              description: Tipo de Documento incorrecto
 */

router.delete('/:id', DocumentoTipoController.destroy);

module.exports = router;