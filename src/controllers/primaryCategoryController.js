const primaryCategoryService = require('../services/primary_category')

const createPrimaryCategory = (req, res)=>{
    primaryCategoryService.createPrimaryCategory(req, res)
}


const getAllPrimaryCategory = (req, res)=>{
    primaryCategoryService.getAllPrimaryCategory(req, res)
}

const editPrimaryCategory = (req, res)=>{
    primaryCategoryService.editPrimaryCategory(req, res)
}

const deletePrimaryCategory = (req, res)=>{
    primaryCategoryService.deletePrimaryCategory(req, res)
}


module.exports ={
    createPrimaryCategory,
    getAllPrimaryCategory,
    editPrimaryCategory,
    deletePrimaryCategory
}