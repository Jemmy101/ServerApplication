const {Product,Category} = require('../models')
const { Op } = require("sequelize");

module.exports = {
    async createProduct(req, res) {
        try{
            const { categoryId } = req.body;
            const category = await Category.findByPk(categoryId);
            if(!category)
                return res.status(400).json({success: false, message: 'Category not found'})
            const result = await Product.create(req.body)
            if(result){
                return res.status(200).json({success: true, message: result})
            }
            else{
                return res.status(400).json({success: false, message: 'Product could not be created'})
            }
        }
        catch(err){
            return res.status(400).json({success: false, message: err.message})
        }
    },
    async getAllProduct(req, res){
        try{
            const {categoryId} = req.query;
            let whereObject = {};
            // if(primaryCategoryId){
            //     const primaryCategory = await Primary_Category.findByPk(primaryCategoryId)
            //     if(!primaryCategory){
            //         return res.status(400).json({success: false, message: 'Primary Category not found'})
            //     }
            //     const category = await Category.findAll({where: {
            //         primaryCategoryId: primaryCategory.id
            //     }})
            //     whereObject.categoryId = {
            //         [Op.in]: category.map(cat => cat.id)
            //     };
            // }
            if(categoryId){
                const category = await Category.findByPk(categoryId)
                if(!category){
                    return res.status(400).json({sucess: false, message: 'Category not found'})
                }
                whereObject.categoryId = categoryId;
            }
            if(req.query.name){
                whereObject.name =  {
                    [Op.iLike]: `%${String(req.query.name)}%`
                }
            }
            const result = await Product.findAll({
                where: whereObject,
                include: {
                    model: Category,
                    attributes: {exclude:['createdAt','updatedAt']}
                }
            });
            if(result){
                return res.status(200).json({success: true, message: result})
            }
        }
        catch(err){
            return res.status(400).json({sucess: false, message: err.message})
        }
    },
    async getProductById(req, res){
        try{
            const {id} = req.params;
            const result = await Product.findByPk(id, {
                include: {
                    model: Category,
                    attributes: {exclude:['createdAt','updatedAt']},
                }
            });
            if(!result)
                throw new Error('Product not found')
            return res.status(200).json({success: true, message: result})
        }
        catch(err){
            return res.status(400).json({sucess: false, message: err.message})
        }
    },
    async editProduct(req, res){
        try{
            console.log(req.params)
            const {id} = req.params;
            const {name, code, description, price, categoryId} = req.body;
            const product = await Product.findByPk(id);
            if(!product){
                return res.status(400).json({success:false, message: 'Product not found'})
            }
            if(categoryId){
                const category = await Category.findByPk(categoryId);
                if(!category)
                    return res.status(400).json({success: false, message: 'Category not found'})
            }
            product.name = name || product.name;
            product.code = code || product.code;
            product.description = description || product.description;
            product.price = price || product.price;
            product.categoryId = categoryId || product.categoryId;
            await product.save()
            return res.status(200).json({success: true, message: product})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    },
    async deleteProduct( req, res){
        try{
            const {id} = req.params;
            const Product = await Product.findByPk(id);
            if(!Product)
                return res.status(400).json({success: false, message: 'Product not found'})
            const result = await Product.destroy()
            if(result)
                return res.status(200).json({success: true, message: result})
        }
        catch(err){
            return res.status(400).json({success:false, message: err.message})
        }
    }
}