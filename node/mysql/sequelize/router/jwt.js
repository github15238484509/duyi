
const jwt = require("jsonwebtoken")
const secret = "xiaoliu"
const cookieKey = "token" 
exports.publish = function (res, maxAge = 3600, info = {}) {

    const token = jwt.sign(info, secret, {
        expiresIn:maxAge*1000
    })
    res.cookie(cookieKey,token,{
        maxAge:maxAge*1000,
        path:"/"
    })          
    res.header("authorization",token)
}
exports.verify = function(token){
    jwt.verify(token,secret)
}