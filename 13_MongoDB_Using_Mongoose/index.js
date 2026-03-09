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
app.post("/save",async (req,resp)=>{
    console.log(req.body);
    // Validation
    const {id,name,age,dept}= req.body
    if(!req.body || !id || !name ||!age ||!dept){
        resp.send({
            message: "data not store",
            success:false,
            storedinfo:null
        })
    }

    const studentData = await studentModel.create(req.body)
    
    resp.send({
        message: "data saved",
        success:true,
        storedinfo:studentData
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