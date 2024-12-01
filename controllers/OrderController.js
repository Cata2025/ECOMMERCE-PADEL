const { Order, OrderProduct, Product } = require("../models/index");

const orderController = {
    async getUserOrders(){
        const userId = req.user.id; 

            
            const orders = await Order.findAll({
                where: { userId }, 
                include: [
                    {
                        model: Product,
                        as: 'products', 
                        through: {
                            model: OrderProduct,
                            attributes: ['quantity'],
                        },
                    },
                ],
            });

        res.json(orders)

    },
    async createUserOrder(req,res){
        const userId = req.user.id; 
        const { products } = req.body;
        const newOrder = await Order.create({
            userId, 
        });
        for (const product of products) {
            await OrderProduct.create({
                order_id: newOrder.id, 
                product_id: product.id, 
                quantity: product.quantity || 1, 
            });
        }

        const orderWithProducts = await Order.findOne({
            where: { id: newOrder.id },
            include: [
              {
                model: Product,
                as: 'products', // Use the alias you defined in the association
                through: {
                  model: OrderProduct,
                  attributes: ['quantity'], // Attributes of the join table
                },
              },
            ],
          });

        res.json(orderWithProducts)

    }
    
    
}


module.exports = orderController