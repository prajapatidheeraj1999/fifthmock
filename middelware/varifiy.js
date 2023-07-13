const jwt = require('jsonwebtoken')

const varify=(req,res,next)=>{

    let token=req.headers.authorization
    
    try{
        jwt.verify(token, 'dheeraj', function(err, decoded) {
            console.log(decoded)
            req.body.userID=decoded.userID
          })
          next()

    }catch(error)
    {
        res.send({"mas":"pls login first"})

    }

}
module.exports={varify}