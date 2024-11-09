import { Router } from "express";
import userController from "../../controllers/users.js";
import userMiddleware from "../../middlewares/users.js";



const UserRouter = Router();

UserRouter.post('/register',userMiddleware.register,userController.register);
UserRouter.post('/login',userController.login)


export default UserRouter;