const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const RolController = require(`${path.CONTROLLERS}/RolesControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Roles:
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
 *                      example: Administrador
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /roles:
 *  post:
 *      tags:
 *          - Roles
 *      summary: Agregar un nuevo Rol
 *      description: Agregar un nuevo Rol
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Rol
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Administrador
 *          required: true
 *      responses:
 *          '200':
 *              description: Rol agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'
 *          '405':
 *              description: Invalid input
 */

router.post('/', RolController.create);

/**
 * @swagger
 * /roles:
 *  get:
 *      tags:
 *        - Roles
 *      summary: Lista todos los Roles existentes
 *      description: Lista todos los Roles existentes
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
 *                          $ref: "#/components/schemas/Roles"
 *      responses:
 *          '200':
 *              description: Se listaron todos Los Roles con exito
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
 *                                      $ref: "#/components/schemas/Roles"
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

router.get('/', RolController.get);

/**
 * @swagger
 * /roles/{Id}:
 *  get:
 *     tags:
 *       - Roles
 *     summary: Buscar Rol por ID
 *     description: Buscar Rol
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Rol a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se listo el Rol por ID
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
 *                                      $ref: "#/components/schemas/Roles"
 *          '404':
 *              description: No se encontro el Rol por ID
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

router.get('/:id', RolController.getById);

/**
 * @swagger
 * /roles/{Id}:
 *  put:
 *      tags:
 *          - Roles
 *      summary: Update de un Rol existente
 *      description: Actualizacion de un Rol por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de un Rol para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizacion de un Rol por id
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Administrador
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Rol existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Roles'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Rol no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', RolController.update);

/**
 * @swagger
 * /roles/{Id}:
 *  delete:
 *      tags:
 *          - Roles
 *      summary: Elimina un Rol por el id
 *      description: Borra el Rol segun el id enviado
 *      operationId: destroy
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID del Rol para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: El Rol fue eliminado correctamente
 *          '400':
 *              description: El Rol es incorrecta
 */

router.delete('/:id', RolController.destroy);

module.exports = router;