const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const ProvinciaController = require(`${path.CONTROLLERS}/ProvinciasControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Provincias:
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
 *                      example: Buenos Aires  
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                 Paises:
 *                      $ref: '#/components/schemas/Paises'
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /provincias:
 *  post:
 *      tags:
 *          - Provincias
 *      summary: Agregar una nueva Provincia
 *      description: Agregar una nueva Provincia
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Provincia
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
 *              description: Provincia agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Provincias'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', ProvinciaController.create);

 /**
  * @swagger
  * /provincias:
  *  get:
  *      tags:
  *        - Provincias
  *      summary: Lista todas las Provincias existentes
  *      description: Lista todas las Provincias existentes
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
  *                          $ref: "#/components/schemas/Provincias"
  *      responses:
  *          '200':
  *              description: Se listaron todas las Provincias con exito
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
  *                                      $ref: "#/components/schemas/Provincias"
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
 
 router.get('/', ProvinciaController.get);
 
 /**
  * @swagger
  * /provincias/{Id}:
  *  get:
  *     tags:
  *       - Provincias
  *     summary: Buscar Provincia por ID
  *     description: Buscar Provincia
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Provincia a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Provincia por ID
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
  *                                      $ref: "#/components/schemas/Provincias"
  *          '404':
  *              description: No se encontro la Provincia por ID
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
 
 router.get('/:id', ProvinciaController.getById);

/**
 * @swagger
 * /provincias/paises/{Id}:
 *  get:
 *     tags:
 *       - Provincias
 *     summary: Buscar Provincia por ID de Pais
 *     description: Buscar Provincia
 *     operationId: getByPais
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: Provincias a devolver por ID de Pais
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se listaron las Provincias por ID de Pais
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
 *                                      $ref: "#/components/schemas/Provincias"
 *          '404':
 *              description: No se encontraron las Provincias por ID de Paises
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

 router.get('/provincias/paises/:id', ProvinciaController.getByPais);

 /**
  * @swagger
  * /provincias/{Id}:
  *  put:
  *      tags:
  *          - Provincias
  *      summary: Update de una Provincia existente
  *      description: Actualizacion de una Provincia por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de una Provincia para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de una Provincia por id
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
  *              description: Se actualizo la Provincia existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Provincias'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: La Provincia no existe
  *          '405':
  *              description: Validation exception
  */
 
router.put('/:id', ProvinciaController.update);
 
 /**
  * @swagger
  * /provincias/{Id}:
  *  delete:
  *      tags:
  *          - Provincias
  *      summary: Elimina una Provincia por el id
  *      description: Borra la Provincia segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de la Provincia para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: La Provincia fue eliminada correctamente
  *          '400':
  *              description: La Provincia es incorrecta
  */
 
router.delete('/:id', ProvinciaController.destroy);

module.exports = router;