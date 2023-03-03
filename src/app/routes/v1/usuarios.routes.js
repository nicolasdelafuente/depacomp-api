const express = require('express');
const router = express.Router();
const UsuarioController = require('../../controllers/UsuariosControllers');

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Usuarios:
 *              required:
 *                  - nombre
 *                  - password
 *                  - email
 *              type: object
 *              properties:
 *                  id: 
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  nombre: 
 *                      type: string
 *                      format: binary
 *                      example: Juan Salvo
 *                  password: 
 *                      type: string
 *                      format: binary
 *                      example: Welcome1!
 *                  email: 
 *                      type: string
 *                      format: binary
 *                      example: Juan@ejemplo.com
 *                  token: 
 *                      type: string
 *                      format: binary
 *                      example: gfgfdgfdgfdgfdgfg
 *                  confirmado: 
 *                      type: string
 *                      format: binary
 *                      example: 1
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /usuarios:
 *  post:
 *      tags:
 *          - Usuarios
 *      summary: Agregar un nuevo Usuario
 *      description: Agregar un nuevo Usuario
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Usuario
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Juan Salvo
 *                          passwrod:
 *                              type: string
 *                              format: binary
 *                              example: Welcome1!
 *                          email:
 *                              type: string
 *                              format: binary
 *                              example: juan@ejemplo.com
 *          required: true
 *      responses:
 *          '200':
 *              description: Usuario agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuarios'
 *          '405':
 *              description: Invalid input
 *      security:
 *          - depacomp_auth:
 *              - write:usuarios
 *              - read:usuarios
 */

router.post('/', UsuarioController.create);

/**
 * @swagger
 * /usuarios:
 *  get:
 *      tags:
 *        - Usuarios
 *      summary: Lista todos los Usuarios existentes
 *      description: Lista todos los Usuarios existentes
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
 *                          $ref: "#/components/schemas/Usuarios"
 *      responses:
 *          '200':
 *              description: Se listaron todos Los Usuarios con exito
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
 *                                      $ref: "#/components/schemas/Usuarios"
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

router.get('/', UsuarioController.get);

/**
 * @swagger
 * /usuarios/{Id}:
 *  get:
 *     tags:
 *       - Usuarios
 *     summary: Buscar Usuario por ID
 *     description: Buscar Usuario
 *     operationId: getById
 *     parameters:
 *       - name: Id
 *         in: path
 *         description: ID de Usuario a devolver
 *         required: true
 *         schema:
 *             type: integer
 *             format: int32
 *     responses:
 *          '200':
 *              description: Se listo el Usuario por ID
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
 *                                      $ref: "#/components/schemas/Usuarios"
 *          '404':
 *              description: No se encontro el Usuario por ID
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

router.get('/:id', UsuarioController.getById);

/**
 * @swagger
 * /usuarios/{Id}:
 *  put:
 *      tags:
 *          - Usuarios
 *      summary: Update de un Usuario existente
 *      description: Actualizacion de un Usuario por Id
 *      operationId: update
 *      parameters:
 *        - name: Id
 *          in: path
 *          description: ID de un Usuario para ser modficado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          description: Actualizacion de un Usuario por id
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Juan Salvo
 *                          passwrod:
 *                              type: string
 *                              format: binary
 *                              example: Welcome1!
 *                          email:
 *                              type: string
 *                              format: binary
 *                              example: juan@ejemplo.com
 *          required: true
 *      responses:
 *          '200':
 *              description: Se actualizo el Usuario existente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuarios'
 *          '400':
 *              description: El ID sumistrado es incorrecto
 *          '404':
 *              description: El Rol no existe
 *          '405':
 *              description: Validation exception
 */

router.put('/:id', UsuarioController.update);

/**
 * @swagger
 * /usuarios/{Id}:
 *  delete:
 *      tags:
 *          - Usuarios
 *      summary: Elimina un Usuario por el id
 *      description: Borra el Usuario segun el id enviado
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
 *          description: ID del Usuario para ser borrado
 *          required: true
 *          schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          '204':
 *              description: El Usuario fue eliminado correctamente
 *          '400':
 *              description: El Usuario es incorrecta
 */

router.delete('/:id', UsuarioController.destroy);

module.exports = router;