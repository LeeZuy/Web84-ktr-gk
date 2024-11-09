import UserModel from "../models/users.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import ApiKeyModel from "../models/apikey.js";


const userController = {
    register: async (req, res) => {
        try {
            const hashedPassword = bcrypt.hashSync(req.body.password,10)
            const user = await UserModel.create({
                ...req.body,
                password: hashedPassword
            });
            user
            res.status(201).send({
                message:'Successful!',
                data:user
            })
        } catch (error) {
            res.status(403).send({
                message:error.message
            })
        }
    },
    getApiKey: async (req,res) => {
        try {
            const{id} = req.params;
            const currentUser = await UserModel.findById(id);
            if(!currentUser) throw new Error('This customer is not exist!');
            const apiKey = `mern-$${currentUser._id}$-$${currentUser.email}$-$${crypto.randomUUID()}$`;
            res.status(200).send({
                message:'Successful!',
                data: apiKey
        });
        } catch (error) {
            res.status(401).send({
                message:error.message
            })
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await UserModel.findOne({ email });
            if(!user) throw new Error ('Email or password is invalid!');
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) throw new Error ('Email or password is invalid!');
            const randomString = crypto.randomUUID();
            const apiKey = `mern-$${user._id}$-$${user.email}$-$${randomString}$`;
            await ApiKeyModel.deleteMany({
                email,
                userId:user._id.toString()
            });
            await ApiKeyModel.create({
                email,
                userId: user._id.toString(),
                randomString
            });
            res.status(200).send({
                message:'Successful!',
                data: apiKey
        });
        } catch (error) {
          res.status(401).send({
            message: error.message,
            data:null
          })  
        }
    }
}



export default userController;