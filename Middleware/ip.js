import express from "express"


const app=  express();

//          Age check
// function ageCheck(req,resp,next) {
//     if(!req.query.age || req.query.age<18 ){
//             resp.send("Alert ! You can not acces this Page  ")
//     }
//     else{
//         next()
//     }
// }
// app.use(ageCheck)
//                  IP Check
function ipCheck(req,resp,next) {
    const ip = req.socket.remoteAddress
    console.log(ip);
    if(ip.includes('192.168.10.9')){
        resp.send("Alert ! You can not acces this Page")
    }
    else{
        next()
    }
    
    
}
app.use(ipCheck)



app.get("/",(req,resp)=>{
    resp.send("<hi> Home Page </h1>")
})
app.get("/login",(req,resp)=>{
    resp.send("<hi> Login Page </h1>")
})
app.get("/admin",(req,resp)=>{
    resp.send("<hi> Admin Page </h1>")
})

app.listen(2000)