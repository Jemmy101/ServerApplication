const router = require('express').Router();
const authController = require('../controllers/authController')

/**
 * User Login
 * @swagger
 * /auth/login:
 *  post:
 *      description: User Login.
 *      summary: User Login.
 *      tags:
 *          - Auth
 *      produces:
 *          - application/json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_name:
 *                              type: string
 *                              example: ram
 *                          password:
 *                              type: string
 *                              example: ram123
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
 *                                      token:
 *                                          type: string
 *                                          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzNzAzNDU0OCwiZXhwIjoxNjM3MTIwOTQ4fQ.naaylahy83KQC4iVqG9TYwYBxD24ewLJlK0bhrVNA1s
 *                                      user:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: number
 *                                                  example: 1
 *                                              name:
 *                                                  type: string
 *                                                  example: Jemmy Maharjan
 *                                              user_name:
 *                                                  type: string
 *                                                  example: jemmy
 *                                              email:
 *                                                  type: string
 *                                                  example: jemmy@gmail.com
 *                                              Roles:
 *                                                  type: array
 *                                                  items:
 *                                                      type: object
 *                                                      properties:
 *                                                          id:
 *                                                              type: number
 *                                                              example: 1
 *                                                          role:
 *                                                              type: string
 *                                                              example: ADMIN
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/login', (req, res)=>{
    authController.login(req, res)
})

/**
 * User Register for Admin
 * @swagger
 * /auth/register/admin:
 *  post:
 *      description: User Register.
 *      summary: User Register/Sign-up.
 *      tags:
 *          - Auth
 *      produces:
 *          - application/json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          full_name:
 *                              type: string
 *                              example: ram
 *                          user_name:
 *                              type: string
 *                              example: ram
 *                          password:
 *                              type: string
 *                              example: ram123
 *                          confirm_password:
 *                              type: string
 *                              example: ram123
 *                          email:
 *                              type: string
 *                              example: ram
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
 *                                      token:
 *                                          type: string
 *                                          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzNzAzNDU0OCwiZXhwIjoxNjM3MTIwOTQ4fQ.naaylahy83KQC4iVqG9TYwYBxD24ewLJlK0bhrVNA1s
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/register/admin', (req, res)=>{
    authController.registerAdmin(req, res)
})

/**
 * User Register for client
 * @swagger
 * /auth/register/client:
 *  post:
 *      description: User Register.
 *      summary: User Register/Sign-up.
 *      tags:
 *          - Auth
 *      produces:
 *          - application/json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          full_name:
 *                              type: string
 *                              example: ram
 *                          user_name:
 *                              type: string
 *                              example: ram
 *                          password:
 *                              type: string
 *                              example: ram123
 *                          confirm_password:
 *                              type: string
 *                              example: ram123
 *                          email:
 *                              type: string
 *                              example: ram
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
 *                                      token:
 *                                          type: string
 *                                          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYzNzAzNDU0OCwiZXhwIjoxNjM3MTIwOTQ4fQ.naaylahy83KQC4iVqG9TYwYBxD24ewLJlK0bhrVNA1s
 *          401:
 *              description: Not authenticated
 *          403:
 *              description: Access token does not have the required permission
 *      
 */
router.post('/register/client', (req, res)=>{
    authController.registerClient(req, res)
})

// router.post('/add-role/:id', (req, res)=>{
//     authController.addRole(req, res)
// })

module.exports = router;