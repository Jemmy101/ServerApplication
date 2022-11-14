const {Order, Product, User, Category} = require('../models')
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const { extractToken} = require('../utils/jwt_utils.js')

// function extractToken (req) {
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//         return req.headers.authorization.split(' ')[1];
//     } else if (req.query && req.query.token) {
//         return req.query.token;
//     }
//     return null;
// }

module.exports = {
    async createOrder(req, res) {
        try{
            const token = extractToken(req);
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            const { productId, quantity } = req.body;
            
            const product = await Product.findByPk(productId);
            if(!product)
                return res.status(400).json({success: false, message: 'Product not found'})
            const result = await Order.create({
                productId,
                quantity,
                userId: decoded?.user?.id,
                totalAmount: Number(quantity * product.price),
                status: 'PENDING'
            })
            if(result){
                return res.status(200).json({success: true, message: result})
            }
            else{
                return res.status(400).json({success: false, message: 'Order could not be created'})
            }
        }
        catch(err){
            return res.status(400).json({success: false, message: err.message})
        }
    },
    async getAllOrder(req, res){
        try{
            const {myOrders, productId, categoryId} = req.query;
            let query = {
                where: {},
                include:[{
                    model: User,
                    attributes: ['id','full_name','user_name','email']
                },
                {
                    model: Product,
                    attributes: ['id','name','code','price'],
                    include: {
                        model: Category,
                    attributes: {exclude:['createdAt','updatedAt']}
                    }
                }]
            };
            const token = extractToken(req);
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log(decoded.user)
            if(!decoded.user.Roles.some(val => val.role === 'ADMIN' || val.role === 'SUPER_ADMIN')){
                query.where = {
                    userId: decoded?.user?.id
                }
            }
            if(productId){
                query.where= {
                    productId 
                }
            }
            if(categoryId){
                const products = await Product.findAll({where:{categoryId}});
                query.where.productId = {
                    [Op.in]: products.map(p => p.id)
                }
            }
            // if(primaryCategoryId){
            //     const primaryCategory = await Primary_Category.findByPk(primaryCategoryId, {
            //         include: {
            //             model: Category,
            //             include: {
            //                 model: Product
            //             }
            //         }
            //     });
            //     query.where.productId = {
            //         [Op.in]: primaryCategory?.Categories.reduce((acc, val)=> [...acc, ...val.Products.map(p => p.id)], [])
            //     }
            // }
            const result = await Order.findAll(query);
            if(result){
                return res.status(200).json({success: true, message: result})
            }
        }
        catch(err){
            return res.status(400).json({sucess: false, message: err.message})
        }
    },
    async editOrder(req, res){
        try{
            const {id} = req.params;
            const {productId, quantity, status} = req.body;
            const order = await Order.findByPk(id);
            if(!order){
                return res.status(400).json({success:false, message: 'Order not found'})
            }
            if(productId){
                const product = await Product.findByPk(productId);
                if(!product)
                    return res.status(400).json({success: false, message: 'Product not found'})
                order.productId = productId;
            }
            order.quantity = quantity || order.quantity;
            order.status = status || order.status;
            await order.save();
            return res.status(200).json({success: true, message: order})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    },
    async deleteOrder( req, res){
        try{
            const {id} = req.params;
            const order = await Order.findByPk(id);
            if(!order)
                return res.status(400).json({success: false, message: 'Order not found'})
            const result = await order.destroy()
            if(result)
                return res.status(200).json({success: true, message: result})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    }
}