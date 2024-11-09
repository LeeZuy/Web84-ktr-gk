

const userMiddleware = {
    register: (req, res, next) =>{
        try {
            const {userName, email, password} = req.body;
            if(!userName) throw new Error ('userName is missing!');
            if(!email) throw new Error ('email is missing!');
            if(!password) throw new Error ('password is missing!')
            return next();
        } catch (error) {
            res.status(403).send({
                message:error.message
            });
        }
    },
}


export default userMiddleware;