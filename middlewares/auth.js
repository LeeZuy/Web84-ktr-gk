import ApiKeyModel from "../models/apikey.js";

const authMiddleware = {
    checkAuth: async (req, res, next) => {
        try {
            const { apiKey } = req.query;
            if (!apiKey) throw new Error ('UNAUTHORIZED!');
            const splitApiKey = String(apiKey).split('$');
            const userId = splitApiKey[1];
            const email = splitApiKey[3];
            const randomString = splitApiKey[5];
            const checkApiKey = await ApiKeyModel.findOne({
                userId,
                email,
                randomString
            });
            if(!checkApiKey) throw new Error ('UNAUTHORIZED!');
            req.userId = userId;
            return next();
        } catch (error) {
            res.status(401).send({
                message: error.message
            });
        }
    }
}

export default authMiddleware;