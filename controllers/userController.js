const userSchema = require('../models/userSchema.js');
const {hashPassword,checkPassword} = require('../crypto.js');

class userController{
    async registration(req,res) {
        try {
            const {login,password} = req.body;
            const hashedPassword = await hashPassword(password);
            const newUser = new userSchema({login, password: hashedPassword});
            await newUser.save();
            res.json(newUser);

        } catch(err) {
            console.log(err);
            
        }   
    }
    async login(req,res) {
        try {
            const {login,password} = req.body;
            const user = await userSchema.findOne({login})
            if(!user) {
                return res.status(400).json(`Пользователь не найден.`)
            }
            const isCorrect = await checkPassword(password, user.password)
            if(!isCorrect) {
                return res.status(400).json('Неверный пароль.')
            }

            res.json('Вход выполнен успешно')
        } catch(err) {
            console.log(err);
            
        }
    }
    async getAllUsers(req,res) {
        try {
            const allUser = await userSchema.find();
            res.json(allUser)
        } catch(err) {
            console.log(err);
            
        }
    }
    // async editUser(req,res) {
        
    // }
    // async deleteUser(req,res) {
        
    // }
}

module.exports = new userController();
//
// dsdsa