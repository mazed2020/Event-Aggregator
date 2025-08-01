const {verifyToken} = require('../utils/jwtTokenGeneration')

const authenticate = async(req,res,next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded = verifyToken(token);
        if(!decoded){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized"});
    }
}

module.exports = {authenticate}