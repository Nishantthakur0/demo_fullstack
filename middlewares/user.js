const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config");

function usermiddleware(req,res,next){
    const token = req.body.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD)
    if (decoded){
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "User not found"
        })
    }

}

module.exports = {
    usermiddleware: usermiddleware
}