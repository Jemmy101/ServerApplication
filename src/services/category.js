const {Category, Primary_Category} = require('../models')
const { Op } = require("sequelize");

module.exports = {
    async createCategory(req, res) {
        try{
            const { name, primaryCategoryId } = req.body;
            const primaryCategory = await Primary_Category.findByPk(primaryCategoryId);
            if(!primaryCategory)
                return res.status(400).json({success: false, message: 'Primary Category not found'})
            const result = await Category.create({name, primaryCategoryId})
            if(result){
                return res.status(200).json({success: true, message: result})
            }
            else{
                return res.status(400).json({success: false, message: 'Category could not be created'})
            }
        }
        catch(err){
            return res.status(400).json({success: false, message: err.message})
        }
    },
    async getAllCategory(req, res){
        try{
            const {primaryCategoryId, name} = req.query;
            const query = {
                where: {},
                include:{
                    model: Primary_Category,
                    attributes: {exclude:['createdAt','updatedAt']}
                }
            }
            if(primaryCategoryId){
                query.where.primaryCategoryId = primaryCategoryId
            }
            if(name){
                query.where.name =  {
                    [Op.iLike]: `%${String(name)}%`
                }
            }
            const result = await Category.findAll(query);
            if(result){
                return res.status(200).json({success: true, message: result})
            }
        }
        catch(err){
            return res.status(400).json({sucess: false, message: err.message})
        }
    },
    async editCategory(req, res){
        try{
            console.log(req.params)
            const {id} = req.params;
            const {name,primaryCategoryId} = req.body;
            const category = await Category.findByPk(id);
            if(!category){
                return res.status(400).json({success:false, message: 'Category not found'})
            }
            if(primaryCategoryId){
                const primaryCategory = await Primary_Category.findByPk(primaryCategoryId);
                if(!primaryCategory)
                    return res.status(400).json({success: false, message: 'Primary Category not found'})
            }
            
            category.name = name || category.name;
            category.primaryCategoryId = primaryCategoryId || category.primaryCategoryI;
            await category.save()
            return res.status(200).json({success: true, message: category})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    },
    async deleteCategory( req, res){
        try{
            const {id} = req.params;
            const category = await Category.findByPk(id);
            if(!category)
                return res.status(400).json({success: false, message: 'Category not found'})
            const result = await category.destroy()
            if(result)
                return res.status(200).json({success: true, message: result})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    }
}