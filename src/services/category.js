const {Category} = require('../models')
const { Op } = require("sequelize");

module.exports = {
    async createCategory(req, res) {
        try{
            const { name } = req.body;
            const result = await Category.create({name})
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
            const {name} = req.query;
            const query = {
                where: {}
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
            const {name} = req.body;
            const category = await Category.findByPk(id);
            if(!category){
                return res.status(400).json({success:false, message: 'Category not found'})
            }
            
            category.name = name || category.name;
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