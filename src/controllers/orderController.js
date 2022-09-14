const OrderService = require('../services/order')

const createOrder = (req, res)=>{
    OrderService.createOrder(req, res)
}


const getAllOrder = (req, res)=>{
    OrderService.getAllOrder(req, res)
}

const editOrder = (req, res)=>{
    OrderService.editOrder(req, res)
}

const deleteOrder = (req, res)=>{
    OrderService.deleteOrder(req, res)
}


module.exports ={
    createOrder,
    getAllOrder,
    editOrder,
    deleteOrder
}