const express = require('express');
const router = express.Router();
const CarreraController = require('../../controllers/CarrerasControllers');

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Carreras:
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
 *                      example: Licenciatura en Informatica 
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  Institutos:
 *                      $ref: '#/components/schemas/Institutos'
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /carreras:
 *  post:
 *      tags:
 *          - Carreras
 *      summary: Agregar una nueva carrera
 *      description: Agregar una nueva carrera
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva carrera
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Licenciatura en Informatica
 *                          instituto_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Carrera agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Carreras'
 *          '405':
 *              description: Invalid input
 */

router.post('/', CarreraController.create);

/**
 * @swagger
 * /carreras:
 *  get:
 *      tags:
 *        - Carreras
 *      summary: Lista todas las Carreras existentes
 *      description: Lista todas las Carreras existentes
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
 *                          $ref: "#/components/schemas/Carreras"
 *      responses:
 *          '200':
 *              description: Se listaron todas las carreras con exito
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
 *                                      $ref: "#/components/schemas/Carreras"
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

router.get('/', CarreraController.get);

/**
 * @swagger
 * /carreras/{Id}:
 *  get:
 *     tags:
 *       - Carreras
 *     summary: Buscar Carrera por ID
 *     description: Buscar Carrera
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Carrera a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se listo la carrera por ID
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
 *                                      $ref: "#/components/schemas/Carreras"
 *          '404':
 *              description: No se encontro la carrera por ID
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

router.get('/:id', CarreraController.getById);

/**
 * @swagger
 * /carreras/{Id}:
 *  put:
 *      tags:
 *          - Carreras
 *      summary: Update de una Carrera existente
 *      description: Actualizacion de una Carrera por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de una Carrera para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizacion de una Carrera por id
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Licenciatura en Informatica
 *                          instituto_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo la Carrera existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Carreras'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: La Carrera no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', CarreraController.update);

/**
 * @swagger
 * /carreras/{Id}:
 *  delete:
 *      tags:
 *          - Carreras
 *      summary: Elimina una Carrera por el id
 *      description: Borra la Carrera segun el id enviado
 *      operationId: destroy
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de la Carrera para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: La Carrera fue eliminada correctamente
 *          '400':
 *              description: La Carrera es incorrecta
 */

router.delete('/:id', CarreraController.destroy);

module.exports = router;