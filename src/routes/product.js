const router = require('express').Router();
const ProductController = require('../controllers/ProductController')

/**
 * Create product
 * @swagger
 * /product:
 *  post:
 *      description: Create product
 *      summary: Create product
 *      tags:
 *          - Product
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
 *                          code:
 *                              type: string
 *                              example: JKT
 *                          price:
 *                              type: number
 *                              example: 2500
 *                          categoryId:
 *                              type: number
 *                              example: 1
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
 *                                      code:
 *                                          type: string
 *                                          example: JKT
 *                                      price:
 *                                          type: number
 *                                          example: 2500
 *                                      categoryId:
 *                                          type: number
 *                                          example: 1
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/', (req, res)=>{
    ProductController.createProduct(req, res)
})

/**
 * Get All product
 * @swagger
 * /product:
 *  get:
 *      description: Get All product
 *      summary: Get All product
 *      tags:
 *          - Product
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: query
 *          name: categoryId
 *          type: number
 *          example: 2
 *        - in: query
 *          name: name
 *          type: string
 *          example: jacket
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
 *                                          code:
 *                                              type: string
 *                                              example: JKT
 *                                          description:
 *                                              type: string
 *                                              example: JKT
 *                                          price:
 *                                              type: number
 *                                              example: 2500
 *                                          categoryId:
 *                                              type: number
 *                                              example: 1
 *                                          createdAt:
 *                                              type: string
 *                                              example: 2022-09-14T20:47:09.504Z
 *                                          updatedAt:
 *                                              type: string
 *                                              example: 2022-09-14T20:47:09.504Z
 *                                          Category:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: number
 *                                                      example: 1
 *                                                  name:
 *                                                      type: string
 *                                                      example: Jackets           
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.get('/', (req, res)=>{
    ProductController.getAllProduct(req, res)
})


/**
 * Get product by id
 * @swagger
 * /product/{productId}:
 *  get:
 *      description: Get product by id
 *      summary: Get product by id
 *      tags:
 *          - Product
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: productId
 *          type: number
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
 *                                  type: object
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: Jacket
 *                                      code:
 *                                          type: string
 *                                          example: JKT
 *                                      description:
 *                                          type: string
 *                                          example: JKT
 *                                      price:
 *                                          type: number
 *                                          example: 2500
 *                                      categoryId:
 *                                          type: number
 *                                          example: 1
 *                                      createdAt:
 *                                          type: string
 *                                          example: 2022-09-14T20:47:09.504Z
 *                                      updatedAt:
 *                                          type: string
 *                                          example: 2022-09-14T20:47:09.504Z
 *                                      Category:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: number
 *                                                  example: 1
 *                                              name:
 *                                                  type: string
 *                                                  example: Jackets           
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.get('/:id', (req, res)=>{
    ProductController.getProductById(req, res)
})


/**
 * Edit product
 * @swagger
 * /product/{productId}:
 *  put:
 *      description: Edit product
 *      summary: Edit product
 *      tags:
 *          - Product
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: productId
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
 *                                      code:
 *                                          type: string
 *                                          example: JKT
 *                                      price:
 *                                          type: number
 *                                          example: 2500
 *                                      categoryId:
 *                                          type: number
 *                                          example: 1
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.put('/:id', (req, res)=>{
    ProductController.editProduct(req, res)
})
/**
 * Delete product
 * @swagger
 * /product/{productId}:
 *  delete:
 *      description: Delete product
 *      summary: Delete product
 *      tags:
 *          - Product
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: productId
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
    ProductController.deleteProduct(req, res)
})
module.exports = router;