const ProductService = require('../services/product')

const createProduct = (req, res)=>{
    ProductService.createProduct(req, res)
}


const getAllProduct = (req, res)=>{
    ProductService.getAllProduct(req, res)
}

const editProduct = (req, res)=>{
    ProductService.editProduct(req, res)
}

const deleteProduct = (req, res)=>{
    ProductService.deleteProduct(req, res)
}


module.exports ={
    createProduct,
    getAllProduct,
    editProduct,
    deleteProduct
}