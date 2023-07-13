const mongoose=require("mongoose")

const employeeschema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    department:String,
    salary:Number,
    userID:String
    
})

const employeemodel=mongoose.model("employee",employeeschema)

module.exports={employeemodel}