const { Router } = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_Admin_PASSWORD} = require("../config");
const { adminmiddleware } = require("../middlewares/admin");

adminRouter.post("/signup",async function(req,res){
    const {email,password,firstname,lastname} = req.body;
    await adminModel.create({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    });
    res.json({
        message: "You are Signed In"
    })
})

adminRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    if (admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_Admin_PASSWORD);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect Crendentials"
        })
    }


})

adminRouter.post("/course",adminmiddleware,async function(req,res){
    const adminId = req.userId;
    const {title,description,imageurl,price} = req.body;
    const course = await adminModel.create({
        title: title,
        description: description,
        imageurl: imageurl,
        price: price,
        creatorId: adminId
    })
    res.json({
        message: "Course created",
        courseId: course._id
    })


})

adminRouter.put("/course",function(req,res){
    res.json({
        message: "signup Done"
    })

})

adminRouter.put("/course/bulk",function(req,res){
    res.json({
        message: "signup Done"
    })

})

module.exports = {
    adminRouter:adminRouter
}

