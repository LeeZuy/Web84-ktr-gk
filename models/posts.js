import mongoose from "mongoose";

const schema = new mongoose.Schema({
     userId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    }
},{
    timestamps:true
});

const PostModel = mongoose.model('posts',schema);
   
export default PostModel;