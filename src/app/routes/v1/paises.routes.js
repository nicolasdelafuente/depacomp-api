const path = require('../../../paths');
const express = require('express');
const router = express.Router();
const PaisController = require(`${path.CONTROLLERS}/PaisesControllers`);


/**Schemas
 * @swagger
 * components:
 *      schemas:
 *          Paises:
 *              required:
 *                  - nombre
 *              type: object
 *              properties:
 *                  id: 
 *                      type: integer
 *                      example: 9
 *                  nombre: 
 *                      type: string
 *                      example: Argentina
 *                  created_at:
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 *                  updated_at: 
 *                      type: string
 *                      example: 2023-02-21 23:47:20
 */

/**
 * @swagger
 * /paises:
 *  post:
 *      tags:
 *          - Paises
 *      summary: Agregar un nuevo Pais
 *      description: Agregar un nuevo Pais
 *      operationId: create
 *      requestBody:
 *          description: Agregar un nuevo Pais
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object 
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              format: binary
 *                              example: Afganistán
 *          required: true
 *      responses:
 *          '200':
 *              description: Pais agregado con exito
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Paises'
 *          '405':
 *              description: Invalid input
 */

 router.post('/', PaisController.create);

 /**
  * @swagger
  * /paises:
  *  get:
  *      tags:
  *        - Paises
  *      summary: Lista todos los paises existentes
  *      description: Lista todos los paises existentes
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
  *                          $ref: "#/components/schemas/Paises"
  *      responses:
  *          '200':
  *              description: Se todos los paises existentes con exito
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
  *                                      $ref: "#/components/schemas/Paises"
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
 
 
 router.get('/', PaisController.get);
 
 /**
  * @swagger
  * /paises/{Id}:
  *  get:
  *     tags:
  *       - Paises
  *     summary: Buscar Pais por ID
  *     description: Buscar Pais
  *     operationId: getById
  *     parameters:
  *       - name: Id
  *         in: path
  *         description: ID de Pais a devolver
  *         required: true
  *         schema:
  *             type: integer
  *             format: int32
  *     responses:
  *          '200':
  *              description: Se encontro el Pais por ID solicitado
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Paises'
  *          '400':
  *              description: ID suministrado invalido
  *          '404':
  *              description: No existe el Pais del id especificado
  */
 
 router.get('/:id', PaisController.getById);
 
 /**
  * @swagger
  * /paises/{Id}:
  *  put:
  *      tags:
  *          - Paises
  *      summary: Update de un Pais existente
  *      description: Actualizacion de un Pais por Id
  *      operationId: update
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID de Pais para ser modficado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      requestBody:
  *          description: Actualizar un Pais de los existentes
  *          content:
  *              application/json:
  *                  schema:
  *                      type: object 
  *                      properties:
  *                          nombre:
  *                              type: string
  *                              format: binary
  *                              example: Argentina
  *          required: true
  *      responses:
  *          '200':
  *              description: Se actualizo el Pais existente
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Paises'
  *          '400':
  *              description: El ID sumistrado es incorrecto
  *          '404':
  *              description: El Pais no existe
  *          '405':
  *              description: Validation exception
  */
 
 router.put('/:id', PaisController.update);
 
 /**
  * @swagger
  * /paises/{Id}:
  *  delete:
  *      tags:
  *          - Paises
  *      summary: Elimina un Pais
  *      description: Borra el Pais
  *      operationId: destroy
  *      parameters:
  *        - name: Id
  *          in: path
  *          description: ID del Pais para ser borrado
  *          required: true
  *          schema:
  *              type: integer
  *              format: int64
  *      responses:
  *          '204':
  *              description: El Pais fue eliminado correctamente
  *          '400':
  *              description: Pais incorrecto
  */
 
router.delete('/:id', PaisController.destroy);

module.exports = router;