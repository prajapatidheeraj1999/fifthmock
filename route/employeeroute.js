

const express=require("express")
const {employeemodel}=require("../modal/employeemodel")
const employeeroute=express.Router()

employeeroute.post("/add",async(req,res)=>{

    let data=req.body

    try{
        console.log(data)

        let add=await employeemodel(data)
        await add.save()
        res.send({"mas":"data has been added"})

    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }

    
})

employeeroute.get("/get",async(req,res)=>{

    let data=req.body
    let {_page,_sort,_order}=req.query
    console.log(_page,_sort,_order)
    let sortorder=_order=="desc"?-1:1
    let skip=5*_page-5
    console.log(sortorder,skip)


    try{
        let add=await employeemodel.find({userID:data.userID}).sort({salary:sortorder}).skip(skip).limit(5)
       
        res.send({"mas":add})

    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }

    
})

employeeroute.patch("/update/:id",async(req,res)=>{

    let data=req.body
    let {id}=req.params

    try{
        let finder=await employeemodel.findOne({_id:id})
        //console.log(finder,data)
        if(finder.userID==data.userID)
        {
            let add=await employeemodel.findByIdAndUpdate({_id:id},data)
            res.send({"mas":"data has been updated"})

        }else{
            res.send({"mas":"you are not authorize preson"})
        }
        
    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }

    
})

employeeroute.delete("/delete/:id",async(req,res)=>{

    let data=req.body
    let {id}=req.params

    try{
        let finder=await employeemodel.findOne({_id:id})
        //console.log(finder,data)
        if(finder.userID==data.userID)
        {
            let add=await employeemodel.findByIdAndDelete({_id:id})
            res.send({"mas":"data has been deleted"})

        }else{
            res.send({"mas":"you are not authorize preson"})
        }
        
    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }

    
})

module.exports={employeeroute}