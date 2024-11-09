import mongoose from "mongoose";

const schema = new mongoose.Schema({
    randomString: String,
    userId: String,
    email: String
});

const ApiKeyModel = mongoose.model('apikeys',schema);
   
export default ApiKeyModel;