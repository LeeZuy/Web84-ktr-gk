import PostModel from "../models/posts.js";
import UserModel from "../models/users.js";



const postController = {
    // getPost: async (req,res) => {
    //     try {
    //         const{id} = req.params;
    //         const currentUser = await UserModel.findById(id);
    //         if(!currentUser) throw new Error('This post is not exist!');
    //         res.status(200).send({
    //             message:'Successful!',
    //             data: apiKey
    //     });
    //     } catch (error) {
    //         res.status(401).send({
    //             message:error.message
    //         })
    //     }
    // },

    createPost: async (req, res) =>{
        try {
            const {content} = req.body;
            const{ userId } = req;
            const newPost = await PostModel.create({
                userId,
                content
            });
            res.status(201).send({
                message:"Created post!",
                data: newPost
            })
        } catch (error) {
            res.status(401).send({
                message: error.message,
                data:null
            })
        }
    },
    updatePost: async (req, res) => {
        try {
            const {postId} = req.params;
            const { userId } = req;
            const {content} =req.body;
            const updatePost = await PostModel.updateOne(
                {
                    postId,
                    userId,
                    content
                })
            if(!updatePost) throw new Error('This post is not exist!');
            res.status(200).send({
                message:"Update successful!",
                data:updatePost
            });



        } catch (error) {
            res.status(401).send({
                message: error.message,
                data:null
            })
        }
    }

}
export default postController