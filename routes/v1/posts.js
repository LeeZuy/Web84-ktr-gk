import { Router } from "express";
import postController from "../../controllers/posts.js";
import postMiddleware from "../../middlewares/posts.js";
import authMiddleware from "../../middlewares/auth.js";

const PostRouter = Router();

PostRouter.post('',authMiddleware.checkAuth,postMiddleware.createPost,postController.createPost);
PostRouter.put('/:id',authMiddleware.checkAuth,postController.updatePost)
export default PostRouter;