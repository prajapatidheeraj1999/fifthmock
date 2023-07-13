
const express=require("express")
const {userouters}=require("./route/useroute")
const {connect}=require("./db")
const cors=require("cors")
const {varify}=require("./middelware/varifiy")
const {employeeroute}=require("./route/employeeroute")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/",userouters)

app.use(varify)

app.use("/dashboard",employeeroute)

app.listen("8080",async()=>{

    try{
        await connect
        console.log("data base is connected")

    }catch(error)
    {
        console.log("not connected")

    }
})