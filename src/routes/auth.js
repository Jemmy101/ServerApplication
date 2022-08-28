const router = require('express').Router();
const authController = require('../controllers/authController')

router.post('/login', (req, res)=>{
    authController.login(req, res)
})

router.post('/register/admin', (req, res)=>{
    authController.registerAdmin(req, res)
})

router.post('/register/client', (req, res)=>{
    authController.registerClient(req, res)
})

// router.post('/add-role/:id', (req, res)=>{
//     authController.addRole(req, res)
// })

module.exports = router;