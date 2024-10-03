const jwt = require("jsonwebtoken")
const {JWT_Admin_PASSWORD} = require("../config");

function adminmiddleware(req,res,next){
    const token = req.body.token;
    const decoded = jwt.verify(token,JWT_Admin_PASSWORD)
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
    adminmiddleware: adminmiddleware
}