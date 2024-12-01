const { Product } = require("../models/index");
const { Op } = require('sequelize');

const productController = {
    async create(req,res){
        const requestBody = req.body
        const newProduct = Product.create(requestBody)
        res.send({message:"Todo correcto"})
    },
    async getAll(req,res){
        const allProducts = await Product.findAll()
        res.send(allProducts)
    },
    async delete(req,res){
        const idItemToDelete = req.params.id
        const deletedProduct = await Product.destroy({
            where:{
              id: idItemToDelete
            }
          })
        res.send("The product is deleted")
    },
    async update(req,res){
        const idItemToUpdate = req.params.id
        const newProduct = req.body
        const product = await Product.findByPk(idItemToUpdate)
        await product.update(newProduct)

        res.send("Producto actualizado")
    },
    async getById(req,res){
        const id = req.params.id
        const product = await Product.findByPk(id)
        res.json(product)
    },
    async getByPriceRange(req,res){
        console.log("controlador price range")
        const { minPrice, maxPrice } = req.query;
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        const products = await Product.findAll({
            where: {
                price: {
                    [Op.between]: [min, max], 
                },
            },
        });

        res.json(products)

    },
    async getProductsByQuery(req,res){
        const query = req.params.query
        const products = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${query}%`, 
                },
            },
        });

        res.json(products)
    },
    async getPriceSortedProducts(req,res){
        const products = await Product.findAll({
            order: [['price', 'DESC']], // Ordena por precio en orden descendente
        });

        res.json(products)
    }
}

module.exports = productController