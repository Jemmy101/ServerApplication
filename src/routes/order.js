const router = require('express').Router();
const OrderController = require('../controllers/orderController')

/**
 * Create orders
 * @swagger
 * /order:
 *  post:
 *      description: Create orders
 *      summary: Create orders
 *      tags:
 *          - Orders
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
 *                          productId:
 *                              type: number
 *                              example: 1
 *                          quantity:
 *                              type: number
 *                              example: 2
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
 *                                      orderId:
 *                                          type: number
 *                                          example: 1
 *                                      quantity:
 *                                          type: number
 *                                          example: 1
 *                                      userId:
 *                                          type: number
 *                                          example: 1
 *                                      totalAmount:
 *                                          type: number
 *                                          example: 3000
 *                                      status:
 *                                          type: string
 *                                          example: status
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/', (req, res)=>{
    OrderController.createOrder(req, res)
})

/**
 * Get order
 * @swagger
 * /order:
 *  get:
 *      description: Get orders
 *      summary: Get orders
 *      tags:
 *          - Orders
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: query
 *          name: productId
 *          type: number
 *          example: 1
 *        - in: query
 *          name: categoryId
 *          type: number
 *          example: 1
 *      security: [{
 *          jwt: []
 *      }]
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
 *                                          orderId:
 *                                              type: number
 *                                              example: 1
 *                                          quantity:
 *                                              type: number
 *                                              example: 1
 *                                          userId:
 *                                              type: number
 *                                              example: 1
 *                                          totalAmount:
 *                                              type: number
 *                                              example: 3000
 *                                          status:
 *                                              type: string
 *                                              example: PENDING
 *                                          User:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: number
 *                                                      example: 1
 *                                                  full_name:
 *                                                      type: string
 *                                                      example: Jemmy Maharjan
 *                                                  user_name:
 *                                                      type: string
 *                                                      example: jemmy
 *                                                  email:
 *                                                      type: string
 *                                                      example: jemmy@gmail.com
 *                                          Product:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: number
 *                                                      example: 1
 *                                                  name:
 *                                                      type: string
 *                                                      example: jacket
 *                                                  code:
 *                                                      type: string
 *                                                      example: WL1
 *                                                  price:
 *                                                      type: number
 *                                                      example: 1200
 *                                                  Category:
 *                                                      type: object
 *                                                      properties: 
 *                                                          id:
 *                                                              type: number
 *                                                              example: 1
 *                                                          name:
 *                                                              type: string
 *                                                              example: Woolen 
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.get('/', (req, res)=>{
    OrderController.getAllOrder(req, res)
})

/**
 * Edit order
 * @swagger
 * /order/{orderId}:
 *  put:
 *      description: Edit order
 *      summary: Edit order
 *      tags:
 *          - Orders
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: orderId
 *          type: integer
 *          example: 1
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          orderId:
 *                              type: number
 *                              example: 1
 *                          status:
 *                              type: number
 *                              example: COMPLETED
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
 *                                      orderId:
 *                                          type: number
 *                                          example: 1
 *                                      quantity:
 *                                          type: number
 *                                          example: 1
 *                                      userId:
 *                                          type: number
 *                                          example: 1
 *                                      totalAmount:
 *                                          type: number
 *                                          example: 3000
 *                                      status:
 *                                          type: string
 *                                          example: status
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.put('/:id', (req, res)=>{
    OrderController.editOrder(req, res)
})

/**
 * Delete order
 * @swagger
 * /order/{orderId}:
 *  delete:
 *      description: Delete order
 *      summary: Delete order
 *      tags:
 *          - Orders
 *      produces:
 *          - application/json
 *      security: [{
 *          jwt: []
 *      }]
 *      parameters:
 *        - in: path
 *          name: orderId
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
    OrderController.deleteOrder(req, res)
})
module.exports = router;