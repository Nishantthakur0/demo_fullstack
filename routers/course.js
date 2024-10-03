const {Router} = require("express");
const courseRouter = Router(); 



courseRouter.post("/purchase",function(req,res){
    res.json({
        message: "signup Done"
    })

})

courseRouter.get("/preview",function(req,res){
    res.json({
        message: "signup Done"
    })

})
module.exports = {
    courseRouter: courseRouter
}