const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const PersonaController = require(`${path.CONTROLLERS}/PersonasControllers`);

/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Personas:
 *              required:
 *                  - nombre
 *                  - apellido
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                  nombre:
 *                      type: string
 *                      format: binary
 *                      example: Juana
 *                  apellido:
 *                      type: string
 *                      format: binary
 *                      example: Lizarazzu
 *                  email:
 *                      type: string
 *                      format: binary
 *                      example: juanaLzrz@gmail.com
 *                  password:
 *                      type: string
 *                      format: binary
 *                      example: 123456789
 *                  documento:
 *                      type: string
 *                      format: binary
 *                      example: 35647398
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  Generos:
 *                      $ref: '#/components/schemas/Generos'
 *                  Roles:
 *                      $ref: '#/components/schemas/Roles'
 *                  Paises:
 *                      $ref: '#/components/schemas/Paises'
 *                  Provincias:
 *                      $ref: '#/components/schemas/Provincias'
 *                  Localidades:
 *                      $ref: '#/components/schemas/Localidades'
 */

// Hay que ver como se agrega con el schema bien hecho
/**
 * @swagger
 * /personas:
 *  post:
 *      tags:
 *          - Personas
 *      summary: Agregar una nueva Persona
 *      description: Agregar una nueva Persona
 *      operationId: create
 *      requestBody:
 *          description: Agregar una nueva Persona
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Juan
 *                          apellido:
 *                              type: string
 *                              format: binary
 *                              example: Salvo
 *                          email:
 *                              type: string
 *                              format: binary
 *                              example: Juanqhyr@gmail.com
 *                          password:
 *                              type: string
 *                              format: binary
 *                              example: 1234
 *                          documento:
 *                              type: string
 *                              format: binary
 *                              example: 33302212
 *                          genero_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          rol_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          pais_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                         provincia_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *                          localidad_id:
 *                              type: integer
 *                              format: int64
 *                              example: 1
 *          required: true
 *      responses:
 *          '200':
 *              description: Persona agregada con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Personas'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', PersonaController.create);

 /**
  * @swagger
  * /personas:
  *  get:
  *      tags:
  *        - Personas
  *      summary: Lista todas las Personas existentes
  *      description: Lista todas las Personas existentes
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
  *                          $ref: "#/components/schemas/Personas"
  *      responses:
  *          '200':
  *              description: Se listaron todas las Personas con exito
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
  *                                      $ref: "#/components/schemas/Personas"
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
 
  router.get('/', PersonaController.get);
 
 /**
  * @swagger
  * /personas/{Id}:
  *  get:
  *     tags:
  *       - Personas
  *     summary: Buscar Persona por ID
  *     description: Buscar Persona
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Persona a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listo la Persona por ID
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
  *                                      $ref: "#/components/schemas/Personas"
  *          '404':
  *              description: No se encontro la Persona por ID
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
 
 router.get('/:id', PersonaController.getById);
 
 /**
  * @swagger
  * /personas/generos/{Id}:
  *  get:
  *     tags:
  *       - Personas
  *     summary: Buscar Personas por ID de Generos
  *     description: Buscar Personas
  *     operationId: getByGenero
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Personas a devolver por ID de Genero
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Personas por ID de Genero
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
  *                                      $ref: "#/components/schemas/Personas"
  *          '404':
  *              description: No se encontraron las Personas por ID de Generos
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
 
 router.get('/generos/:id', PersonaController.getByGenero);


 /**
  * @swagger
  * /personas/generos/{Id}:
  *  get:
  *     tags:
  *       - Personas
  *     summary: Buscar Personas por ID de Generos
  *     description: Buscar Personas
  *     operationId: getByGenero
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Personas a devolver por ID de Genero
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Personas por ID de Genero
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
  *                                      $ref: "#/components/schemas/Personas"
  *          '404':
  *              description: No se encontraron las Personas por ID de Generos
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
 
  router.get('/generos/:id', PersonaController.getByGenero);
 
 /**
  * @swagger
  * /personas/generos/{Id}:
  *  get:
  *     tags:
  *       - Personas
  *     summary: Buscar Personas por ID de Generos
  *     description: Buscar Personas
  *     operationId: getByGenero
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Personas a devolver por ID de Genero
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Personas por ID de Genero
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
  *                                      $ref: "#/components/schemas/Personas"
  *          '404':
  *              description: No se encontraron las Personas por ID de Generos
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
 
  router.get('/generos/:id', PersonaController.getByGenero);

 /**
  * @swagger
  * /personas/roles/{Id}:
  *  get:
  *     tags:
  *       - Personas
  *     summary: Buscar Personas por ID de Rol
  *     description: Buscar Personas
  *     operationId: getByRol
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: Personas a devolver por ID de Rol
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se listaron las Personas por ID de Rol
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
  *                                      $ref: "#/components/schemas/Personas"
  *          '404':
  *              description: No se encontraron las Personas por ID de Rol
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
 
  router.get('/roles/:id', PersonaController.getByRol); 

 /**
  * @swagger
  * /personas/{Id}:
  *  put:
  *      tags:
  *          - Personas
  *      summary: Update de una Persona existente
  *      description: Actualizacion de una Persona por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de una Persona para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizacion de una Persona por id
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          nombre:
  *                              type: string
  *                              format: binary
  *                              example: Juana
  *                          apellido:
  *                              type: string
  *                              format: binary
  *                              example: Salvo
  *                          email:
  *                              type: string
  *                              format: binary
  *                              example: Juanqhyr@gmail.com
  *                          password:
  *                              type: string
  *                              format: binary
  *                              example: 1234
  *                          documento:
  *                              type: string
  *                              format: binary
  *                              example: 33302212
  *                          genero_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *                          rol_id:
  *                              type: integer
  *                              format: int64
  *                              example: 1
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo la Persona existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Personas'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: La Persona no existe
  *          '405':
  *              description: Validation exception
  */
 
 router.put('/:id', PersonaController.update);
 
 /**
  * @swagger
  * /personas/{Id}:
  *  delete:
  *      tags:
  *          - Personas
  *      summary: Elimina una Persona por el id
  *      description: Borra la Persona segun el id enviado
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de la Persona para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: La Persona fue eliminada correctamente
  *          '400':
  *              description: La Persona es incorrecta
  */
 
 router.delete('/:id', PersonaController.destroy);

module.exports = router;