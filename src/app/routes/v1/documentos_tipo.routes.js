const express = require('express');
const router = express.Router();
const DocumentosTipoController  = require('../../controllers/DocumentosTipoControllers');

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Documentos Tipo:
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
 * /documentos_tipo:
 *  post:
 *      tags:
 *          - Documentos Tipo
 *      summary: Agregar un nuevo Tipo de Documento
 *      description: Agregar un nuevo Tipo de Documento
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Tipo de Documento
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
 *                          $ref: '#/components/schemas/Documentos Tipo'
 *          '405':
 *              description: Invalid input
 */

router.post('/', DocumentosTipoController.create);

/**
 * @swagger
 * /documentos_tipo:
 *  get:
 *      tags:
 *        - Documentos Tipo
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
 *                          $ref: '#/components/schemas/Documentos Tipo'
 *      responses:
 *          '200':
 *              description: Tipo de documento agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Documentos Tipo'
 */

router.get('/', DocumentosTipoController.get);

/**
 * @swagger
 *  
 * /documentos_tipo/{Id}:
 *  get:
 *     tags:
 *       - Documentos Tipo
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
 *                          $ref: '#/components/schemas/Documentos Tipo'
 *          '400':
 *              description: ID suministrado invalido
 *          '404':
 *              description: No existe el Tipo de Documento del id especificado
 */

router.get('/:id', DocumentosTipoController.getById);

/**
 * @swagger
 * /documentos_tipo/{Id}:
 *  put:
 *      tags:
 *          - Documentos Tipo
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
 *                          $ref: '#/components/schemas/Documentos Tipo'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Tipo de Documento no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', DocumentosTipoController.update);

/**
 * @swagger
 *  
 * /documentos_tipo/{Id}:
 *  delete:
 *      tags:
 *          - Documentos Tipo
 *      summary: Elimina un Tipo de Documento
 *      description: Borra el Tipo de Documento
 *      operationId: destroy
 *      parameters:
 *        - name: api_key
 *          in: header
 *          description: ''
 *          required: false
 *          schema:
 *              type: string
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

router.delete('/:id', DocumentosTipoController.destroy);

module.exports = router;