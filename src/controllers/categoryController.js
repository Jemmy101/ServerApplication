const CategoryService = require('../services/category')

const createCategory = (req, res)=>{
    CategoryService.createCategory(req, res)
}


const getAllCategory = (req, res)=>{
    CategoryService.getAllCategory(req, res)
}

const editCategory = (req, res)=>{
    CategoryService.editCategory(req, res)
}

const deleteCategory = (req, res)=>{
    CategoryService.deleteCategory(req, res)
}


module.exports ={
    createCategory,
    getAllCategory,
    editCategory,
    deleteCategory
}