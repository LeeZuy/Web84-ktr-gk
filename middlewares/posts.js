const postMiddleware = {
    createPost: (req, res, next) => {
        try {
            const {content} = req.body
            if(!content) throw new Error('content is required!');
            return next();
        } catch (error) {
            res.status(403).send({
                message: error.message
            });
        }
    }
    
}

export default postMiddleware;