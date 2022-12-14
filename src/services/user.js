const {User, User_Role, Role} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const registerUserFn = async (body, isAdmin) => {
    return new Promise(async(resolve, reject)=>{
        try{
            const {password, confirm_password, user_name} = body;

            const oldUser = await User.findOne({where:{user_name}})
            if(oldUser)
                reject("Username already taken!")
            if(!password)
                reject("Password required!")
            if(password !== confirm_password)
                reject("Two passwords donot match!")

            //generate salt for hashing
            bcrypt.genSalt(10, (error, salt)=>{
                if (error){
                    reject(error.message)}
                
                //hash user password
                bcrypt.hash(password, salt, (error, hash)=>{
                    if(error)
                        reject(error.message)
                    body.password = hash;

                    //cerate User
                    User.create(body)
                    .then(async user =>{
                        try{
                            const userRole = await Role.findOne({where:{role: isAdmin? 'ADMIN' : 'CLIENT'}})

                            //Create User Role
                            await User_Role.create({
                                user_id: user.id,
                                role_id: userRole.id
                            })
                            const payload = {
                            user:{
                                id: user.id,
                                name: user.full_name,
                                user_name: user.user_name,
                                email: user.email,
                                Roles: [{
                                    id: userRole.id,
                                    role: userRole.role
                                }]
                            }
                        }
                            //generate access token
                            const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'});
                            // return res.status(200).json({success: true, message: {token: accessToken}})
                            resolve({success: true, message: {token: accessToken}})
                        }
                        catch(err){
                            reject(err.message)
                        }
                    })
                    .catch(err => reject(err.message))
                })
            })
        }
        catch(err){
            console.log(err)
            reject(err.message)
        }
        })
        
    }

module.exports= {
    async registerAdmin(req, res){
        registerUserFn(req.body, true).then(result => {
            return res.status(200).json(result)
        })
        .catch(err => {
            return res.status(400).json({success:false, message: err})
        })
    },

    async registerClient(req, res){
        registerUserFn(req.body, false).then(result => {
            return res.status(200).json(result)
        })
        .catch(err => {
            return res.status(400).json({success:false, message: err})
        })
    },

    login(req, res){
        console.log('login service')
        User.findOne({where: 
            {
                user_name: req.body.user_name
            },
            include:{
                model: Role,
                attributes: ['id', 'role']
            }
        })
        .then(user => {
            if(!user)
                return res.status(400).json({success: false, message:"User not registered"})
            bcrypt.compare(req.body.password, user.password, async function(err, result) {
                if(err)
                    return res.status(400).json({success: false, message:err.message})
                if(!result)
                    return res.status(400).json({success: false, message:"Password Incorrect"})
                const payload = {
                    // userId: user.id,
                    user:{
                        id: user.id,
                        name: user.full_name,
                        user_name: user.user_name,
                        email: user.email,
                        Roles: user.Roles?.map(role => {
                            return {
                                id: role.id,
                                role: role.role
                            }
                        })
                    }
                }
                const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'});
                res.status(200).json({success:true, message:{token: accessToken, user: payload.user}})
            });
        })
        .catch(err => res.status(400).json({success: false,message: err.message}))
    },

}