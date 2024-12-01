const { Categorie, Product } = require("../models/index");


const categorieController = {
    async getName(req,res){
        const id = req.params.id
        const categorieName = await Categorie.findByPk(id);
        res.json(categorieName)
    },
    async create(req,res){
        const requestBody = req.body
        const newCategorie = await Categorie.create(requestBody)
        res.send({message:"Todo correcto"})
    },
    async getProducts(req,res){
        console.log(" este es mi controlador")
        const name = req.params.name
        const categorieProducts =  await Categorie.findOne({
            where: { name }, // Filtra por el ID de la categoría
            include: {
              model: Product, // Incluye los productos asociados
              as: 'products', // Usa el alias definido en la relación
            },
          });

        res.json(categorieProducts)
    }
}

module.exports = categorieController