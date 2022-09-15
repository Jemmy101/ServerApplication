const router = require('express').Router();
const primaryCategoryController = require('../controllers/primaryCategoryController')

/**
 * Create primary category
 * @swagger
 * /primary-category:
 *  post:
 *      description: Create primary category
 *      summary: Create primary category
 *      tags:
 *          - Primary Category
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
 *                                      name:
 *                                          type: string
 *                                          example: Jacket
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/', (req, res)=>{
    primaryCategoryController.createPrimaryCategory(req, res)
})

/**
 * Get primary category
 * @swagger
 * /primary-category:
 *  get:
 *      description: Get primary category
 *      summary: Get primary category
 *      tags:
 *          - Primary Category
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
 *                                          name:
 *                                              type: string
 *                                              example: Jacket
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.get('/', (req, res)=>{
    primaryCategoryController.getAllPrimaryCategory(req, res)
})

/**
 * Edit primary category
 * @swagger
 * /primary-category/{primaryCategoryId}:
 *  put:
 *      description: Edit primary category
 *      summary: Edit primary category
 *      tags:
 *          - Primary Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: primaryCategoryId
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
 *                                      name:
 *                                          type: string
 *                                          example: Jacket
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.put('/:id', (req, res)=>{
    primaryCategoryController.editPrimaryCategory(req, res)
})

/**
 * Delete primary category
 * @swagger
 * /primary-category/{primaryCategoryId}:
 *  delete:
 *      description: Delete primary category
 *      summary: Delete primary category
 *      tags:
 *          - Primary Category
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: primaryCategoryId
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
    primaryCategoryController.deletePrimaryCategory(req, res)
})
module.exports = router;