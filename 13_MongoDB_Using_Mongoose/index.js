import mangoose from "mongoose"
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();
await mangoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("_________cconneted_________");
    
})
app.get("/", async (req,resp)=>{

    const studentData = await studentModel.find()

    resp.send(studentData)
})

app.listen(3200)

// async function dbConnection() {
//    await mangoose.connect("mongodb://localhost:27017/school")
//    const schema = mongoose.Schema({
//     id:Number,
//     name:String,
//     age:Number,
//     dept:String,
//    })

//    const studentModel = mongoose.model('students',schema);
//    const result = await studentModel.find();
//    console.log(result);
   
// }
// dbConnection()