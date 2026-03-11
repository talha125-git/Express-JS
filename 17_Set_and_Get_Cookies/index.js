import express from "express"

const app = express();
app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))

app.get("/",(req,resp)=>{

    // get all cookies
    let cookieData = req.get('cookie')

    let name = ""

    if(cookieData){
        // split cookies into array
        let cookies = cookieData.split(";")

        // loop through cookies
        cookies.forEach((item)=>{
            let data = item.split("=")

            // check if cookie name is "name"
            if(data[0].trim() === "name"){
                name = data[1]
            }
        })
    }

    console.log(name)

    // send name to EJS page
    resp.render('home',{name})
})

app.get("/login",(req,resp)=>{
    resp.render('login')
})

app.post("/profile",(req,resp)=>{

    // set cookies
    resp.setHeader('Set-Cookie',"login=true")
    resp.setHeader('Set-Cookie',"name=" + req.body.name)

    resp.render('profile')
})

app.listen(3200)