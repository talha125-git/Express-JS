import express from "express"
import path from "path"

const app = express()



//============ Buildin Middleware ===========
app.use(express.urlencoded({extended:false}))
//============ Buildin Middleware ===========
app.use(express.static('public'))

app.get("/",(req, resp) => {
    const abslute_file_path = path.resolve("pages/home.html")
    resp.sendFile(abslute_file_path);
});
app.get("/login",(req, resp) => {
    resp.send(`
        
         <form action="/submit" method="post">
            <input type="text" name="email" placeholder="enter mail" id=""> <br> <br>
            <input type="text" name="password" placeholder="enter password" id=""> <br> <br>
            <button>Login</button>
        </form>
        
        `);
});
app.post("/submit",(req, resp) => {
    console.log("user login details are  : ", req.body);
    
    resp.send("Submit page");
});

app.listen(1234)