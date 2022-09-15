const {Primary_Category} = require('../models')
const { Op } = require("sequelize");

module.exports = {
    async createPrimaryCategory(req, res) {
        try{
            const { name } = req.body;
            const result = await Primary_Category.create({name})
            if(result){
                return res.status(200).json({success: true, message: result})
            }
            else{
                return res.status(400).json({success: false, message: 'Primary Category could not be created'})
            }
        }
        catch(err){
            return res.status(400).json({success: false, message: err.message})
        }
    },
    async getAllPrimaryCategory(req, res){
        try{
            const {name}= req.query;
            const query ={
                where: {}
            }
            if(name){
                query.where.name =  {
                    [Op.iLike]: `%${String(name)}%`
                }
            }
            const result = await Primary_Category.findAll(query);
            if(result){
                return res.status(200).json({success: true, message: result})
            }
        }
        catch(err){
            return res.status(400).json({sucess: false, message: err.message})
        }
    },
    async editPrimaryCategory(req, res){
        try{
            console.log(req.params)
            const {id} = req.params;
            const {name} = req.body;
            const primaryCategory = await Primary_Category.findByPk(id);
            if(!primaryCategory){
                return res.status(400).json({success:false, message: 'Primary Category not found'})
            }
            if(name){
                primaryCategory.name = name;
                await primaryCategory.save()
            }
            return res.status(200).json({success: true, message: primaryCategory})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    },
    async deletePrimaryCategory( req, res){
        try{
            const {id} = req.params;
            const primaryCategory = await Primary_Category.findByPk(id);
            if(!primaryCategory)
                return res.status(400).json({success: false, message: 'Primary Category not found'})
            const result = await primaryCategory.destroy()
            if(result)
                return res.status(200).json({success: true, message: result})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    }
}