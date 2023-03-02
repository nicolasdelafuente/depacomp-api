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
 */

/**
 * @swagger
 * /institutos:
 *  post:
 *      tags:
 *          - Institutos
 *      summary: Agregar un nuevo Instituto
 *      description: Agregar un nuevo Instituto
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Institutos
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Instituto de Tecnología e Ingenieria
 *          required: true
 *      responses:
 *          '200':
 *              description: Instituto agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Institutos'
 *          '405':
 *              description: Invalid input
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

/**
 * @swagger
 *  
 * /institutos/{Id}:
 *  get:
 *     tags:
 *       - Institutos
 *     summary: Buscar Instituto por ID
 *     description: Buscar Instituto
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Instituto a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se encontro el Instituto por ID solicitado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Institutos'
 *          '400':
 *              description: ID suministrado invalido
 *          '404':
 *              description: No existe el Instituto del id especificado
 */

router.get('/:id', InstitutoController.getById);

/**
 * @swagger
 * /institutos/{Id}:
 *  put:
 *      tags:
 *          - Institutos
 *      summary: Update de un Instituto existente
 *      description: Actualizacion de un Instituto por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de Institutos para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizar un Instituto de los existentes
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Instituto de Tecnología e Ingenieria
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Instituto existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Institutos'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Instituto no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', InstitutoController.update);

/**
 * @swagger
 *  
 * /institutos/{Id}:
 *  delete:
 *      tags:
 *          - Institutos
 *      summary: Elimina un Instituto
 *      description: Borra el Instituto
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
 *          description: ID del Instituto para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: El Instituto fue eliminado correctamente
 *          '400':
 *              description: Instituto incorrecto
 */

router.delete('/:id', InstitutoController.destroy);

module.exports = router;