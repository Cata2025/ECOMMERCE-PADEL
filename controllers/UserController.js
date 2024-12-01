const bcrypt = require("bcryptjs");
const { User, Token, Sequelize} = require("../models/index");
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']   
const {Op}= Sequelize

const userController = {
    async login(req,res){
        const user = await User.findOne({
            where: {
              email: req.body.email,
            },
          });
          if (!user) {
            return res.status(400).send({ message: "Incorrect email or password" });
          }
          const isMatch = await bcrypt.compare(req.body.password, user.password);
          // const isMatch = await bcrypt.compare("quieromuchoamitia","$10$wzRkyjrV30ay3tgFr.k/6OJ8VhZdBhKTf9t/tIfU0MYhktoTzgK6G")
          if (!isMatch) {
              return res.status(400).send({message: "Incorrect email or password"})
          }
          let token = jwt.sign({id:user.id},jwt_secret)//he creado el Token
          await Token.create({token,UserId:user.id}) //guardar Token en la tabla Tokens
          res.send({token,message:"Successfully logged",user})
    },
    async logout(req,res){
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
    },
    async create(req,res){
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create(req.body);
            res.status(201).send({ message: "Usuario creado", user });

          } catch (error) {
            console.log(error)
            res.status(500).send({ message: "There was a problem", error });
        
          }
    },
    async update(req,res){
        const id = req.params.id
        const newUserData = req.body; // Data to update (sent in the request body)

        newUserData.password = await bcrypt.hash(newUserData.password, 10)
        console.log("NEW USER DATA")
        console.log(newUserData)

        const user = await User.findByPk(id);
        await user.update(newUserData);

        res.status(200).json({
            message: 'User updated successfully',
            user,
          });
    },
    async delete(req,res){
        try {
            const { id } = req.params; 
        
         
            const user = await User.findByPk(id);
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
        
          
            await user.destroy();
        
            res.status(200).json({ message: 'User deleted successfully' });
          } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user', error });
          }
    }
}


module.exports = userController