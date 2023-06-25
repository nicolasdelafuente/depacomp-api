const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const CategoriaController = require(`${path.CONTROLLERS}/CategoriasControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Categorias:
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
 *                      example: Discapacidad
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
 * /categorias:
 *  post:
 *      tags:
 *          - Categorias
 *      summary: Agregar una nueva Categoria
 *      description: Agregar una nueva Categoria
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Categoria
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Discapacidad
 *                         
 *          required: true
 *      responses:
 *          '200':
 *              description: Categoria agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Categorias'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', CategoriaController.create);

 /**
  * @swagger
  * /categorias:
  *  get:
  *      tags:
  *        - Categorias
  *      summary: Lista todas las Categorias existentes
  *      description: Lista todas las Categorias existentes
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
  *                          $ref: "#/components/schemas/Categorias"
  *      responses:
  *          '200':
  *              description: Se listaron todas las Categorias con exito
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
  *                                      $ref: "#/components/schemas/Categorias"
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
 
 router.get('/', CategoriaController.get);
 
 /**
  * @swagger
  * /categorias/{Id}:
  *  get:
  *     tags:
  *       - Categorias
  *     summary: Buscar Categoria por ID
  *     description: Buscar Categoria
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Categoria a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Categoria por ID
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
  *                                      $ref: "#/components/schemas/Categorias"
  *          '404':
  *              description: No se encontro la Categoria por ID
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

 router.get('/:id', CategoriaController.getById);
 
 /**
  * @swagger
  * /categorias/{Id}:
  *  put:
  *      tags:
  *          - Categorias
  *      summary: Update de una Categoria existente
  *      description: Actualizacion de una Categoria por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de una Categoria para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de una Categoria por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          nombre:
  *                              type: string
  *                              format: binary
  *                              example: Discapacidad
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo la Categoria existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Categorias'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: La Categoria no existe
  *          '405':
  *              description: Validation exception
  */
 
router.put('/:id', CategoriaController.update);
 
 /**
  * @swagger
  * /categorias/{Id}:
  *  delete:
  *      tags:
  *          - Categorias
  *      summary: Elimina una Categoria por el id
  *      description: Borra la Categoria segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de la Categoria para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: La Categoria fue eliminada correctamente
  *          '400':
  *              description: La Categoria es incorrecta
  */
 
router.delete('/:id', CategoriaController.destroy);

module.exports = router;