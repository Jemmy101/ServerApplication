const userService = require('../services/user')

const login = (req, res)=>{
    userService.login(req, res)
}

const registerAdmin = (req, res)=>{
   userService.registerAdmin(req, res)
}
const registerClient = (req, res)=>{
   userService.registerClient(req, res)
}
const addRole = (req, res)=>{
    userService.addRole(req, res)
}


module.exports ={
    login,
    registerAdmin,
    registerClient,
    addRole,
}