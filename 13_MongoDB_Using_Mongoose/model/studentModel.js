import mangoose from "mongoose"
import studentSchema from "../schema/studentSchema.js"

const studentModel = mangoose.model('students',studentSchema)
export default studentModel