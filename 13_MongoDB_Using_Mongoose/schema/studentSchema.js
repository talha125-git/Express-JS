import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    id : Number,
    name : String,
    age : Number,
    dept : String,
})

export default studentSchema