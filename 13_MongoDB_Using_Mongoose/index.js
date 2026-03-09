import mongoose from "mongoose"
import mangoose from "mongoose"

async function dbConnection() {
   await mangoose.connect("mongodb://localhost:27017/school")
   const schema = mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    dept:String,
   })

   const studentModel = mongoose.model('students',schema);
   const result = await studentModel.find();
   console.log(result);
   
}
dbConnection()