const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController')
/**
 * Create category
 * @swagger
 * /category:
 *  post:
 *      description: Create category
 *      summary: Create category
 *      tags:
 *          - Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Jacket
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: object
 *                                  properties:
*                                       id:
*                                           type: number
*                                           example: 1
*                                       name:
*                                           type: string
*                                           example: Jacket
*                                       createdAt:
*                                           type: string
*                                           example: 2022-09-14T20:46:27.491Z
*                                       updatedAt:
*                                           type: string
*                                           example: 2022-09-14T20:46:27.491Z
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/', (req, res)=>{
    CategoryController.createCategory(req, res)
})

/**
 * Get category
 * @swagger
 * /category:
 *  get:
 *      description: Get category
 *      summary: Get category
 *      tags:
 *          - Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: query
 *          name: name
 *          type: string
 *          example: woolen
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: number
 *                                              example: 1
 *                                          name:
 *                                              type: string
 *                                              example: Jacket
 *                                          createdAt:
 *                                              type: string
 *                                              example: 2022-09-14T20:46:27.491Z
 *                                          updatedAt:
 *                                              type: string
 *                                              example: 2022-09-14T20:46:27.491Z
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.get('/', (req, res)=>{
    CategoryController.getAllCategory(req, res)
})

/**
 * Edit category
 * @swagger
 * /category/{categoryId}:
 *  put:
 *      description: Edit category
 *      summary: Edit category
 *      tags:
 *          - Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: categoryId
 *          type: integer
 *          example: 1
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Jacket
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: number
 *                                          example: 1
 *                                      name:
 *                                          type: string
 *                                          example: Jacket
 *                                      createdAt:
 *                                          type: string
 *                                          example: 2022-09-14T20:46:27.491Z
 *                                      updatedAt:
 *                                          type: string
 *                                          example: 2022-09-14T20:46:27.491Z
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.put('/:id', (req, res)=>{
    CategoryController.editCategory(req, res)
})

/**
 * Delete category
 * @swagger
 * /category/{categoryId}:
 *  delete:
 *      description: Delete category
 *      summary: Delete category
 *      tags:
 *          - Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: categoryId
 *          type: integer
 *          example: 1
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: array
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.delete('/:id', (req, res)=>{
    CategoryController.deleteCategory(req, res)
})
module.exports = router;