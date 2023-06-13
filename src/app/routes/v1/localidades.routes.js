const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const LocalidadController = require(`${path.CONTROLLERS}/LocalidadesControllers`);


/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Localidades:
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
 *                      example: 25 de Mayo 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  Provincias:
 *                      $ref: '#/components/schemas/Provincias'
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /localidades:
 *  post:
 *      tags:
 *          - Localidades
 *      summary: Agregar una nueva Localidad
 *      description: Agregar una nueva Localidad
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Localidad
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: 25 de Mayo
 *                          provincia_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Localidad agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Localidades'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', LocalidadController.create);

 /**
  * @swagger
  * /localidades:
  *  get:
  *      tags:
  *        - Localidades
  *      summary: Lista todas las Localidades existentes
  *      description: Lista todas las Localidades existentes
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
  *                          $ref: "#/components/schemas/Localidades"
  *      responses:
  *          '200':
  *              description: Se listaron todas las Localidades con exito
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
  *                                      $ref: "#/components/schemas/Localidades"
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
 
 router.get('/', LocalidadController.get);
 
 /**
  * @swagger
  * /localidades/{Id}:
  *  get:
  *     tags:
  *       - Localidades
  *     summary: Buscar Localidad por ID
  *     description: Buscar Localidad
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Localidad a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Localidad por ID
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
  *                                      $ref: "#/components/schemas/Localidades"
  *          '404':
  *              description: No se encontro la Localidad por ID
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
 
 router.get('/:id', LocalidadController.getById);
 /**
  * @swagger
  * /localidades/provincias/{Id}:
  *  get:
  *     tags:
  *       - Localidades
  *     summary: Buscar Localidad por ID de Provincias
  *     description: Buscar Localidad
  *     operationId: getByProvincia
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Localidades a devolver por ID de Provincia
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Localidades por ID de Provincia
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
  *                                      $ref: "#/components/schemas/Localidades"
  *          '404':
  *              description: No se encontraron las Localidades por ID de Provincia
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
 
 router.get('/provincias/:id', LocalidadController.getByProvincia);
 
 /**
  * @swagger
  * /localidades/{Id}:
  *  put:
  *      tags:
  *          - Localidades
  *      summary: Modificacion de una Localidad existente
  *      description: Actualizacion de una Localidad por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de una Localidad para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de una Localidad por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          nombre:
  *                              type: string
  *                              format: binary
  *                              example: 25 de Mayo
  *                          provincia_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo la Localidad existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Localidades'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: La Localidad no existe
  *          '405':
  *              description: Validation exception
  */
 
 router.put('/:id', LocalidadController.update);
 
 /**
  * @swagger
  * /localidades/{Id}:
  *  delete:
  *      tags:
  *          - Localidades
  *      summary: Elimina una Localidad por el id
  *      description: Borra la Localidad segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de la Localidad para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: La Localidad fue eliminada correctamente
  *          '400':
  *              description: La Localidad es incorrecta
  */
 
 router.delete('/:id', LocalidadController.destroy);

 module.exports = router;