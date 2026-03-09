import mangoose from "mongoose"
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.json());

await mangoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("_________cconneted_________");
    
})
app.get("/", async (req,resp)=>{

    const studentData = await studentModel.find()

    resp.send(studentData)
})

// Make Post method REST API with Mongoose to insert data
app.post("/save", async (req, resp) => {
    console.log(req.body);

    const { id, name, age, dept } = req.body

    // validation
    if (!req.body || !id || !name || !age || !dept) {
        return resp.send({
            message: "data not stored",
            success: false,
            storedinfo: null
        })
    }

    const studentData = await studentModel.create(req.body)

    resp.send({
        message: "data saved",
        success: true,
        storedinfo: studentData
    })
})

// Make UPDATE REST API with Mongoose
app.put("/update/:id",async (req,resp)=>{
    const id = req.params.id
    console.log(req.body,id);
    
    const studeentdata = await studentModel.findByIdAndUpdate(id,{
        ...req.body
    })
    resp.send({
        message: "data Updated",
        success:true,
        info:studeentdata
    })
})

// Make DELETE REST API with Mongoose
app.delete("/delete/:id",async (req,resp)=>{
    const id = req.params.id
    
    
    const studeentdata = await studentModel.findByIdAndDelete(id,{
        ...req.body
    })
    resp.send({
        message: "data Deleted",
        success:true,
        info:studeentdata
    })
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