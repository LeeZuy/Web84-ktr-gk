import { Router } from "express";
import UserRouter from "./users.js";
import PostRouter from "./posts.js";

const V1Router = Router();

V1Router.use('/users',UserRouter);
V1Router.use('/posts',PostRouter);
export default V1Router;