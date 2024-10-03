const express = require("express");
const mongoose = require("mongoose"); 
const { userRouter} = require("./routers/user");
const { courseRouter} = require("./routers/course");
const { adminRouter } = require("./routers/admin");
const app = express();
app.use(express.json());

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);
async function main(){
    await mongoose.connect("mongodb+srv://nishantthakur98434:awHQKeBdfBJez0Os@cluster0.g2tib.mongodb.net/coursera-app");
    app.listen(3000);

}

main();