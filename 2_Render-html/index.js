import express from "express"
import path from "path"

const app=  express();

const absultePatth = path.resolve("pages")

app.get("/",(req, resp)=>{
    resp.sendFile(absultePatth+"/home.html")
})

app.get("/login",(req, resp)=>{
    resp.sendFile(absultePatth+"/login.html")
})

app.post("/submit",(req, resp)=>{
   resp.sendFile(absultePatth+"/submit.html")
})

app.get("/about",(req, resp)=>{
    resp.sendFile(absultePatth+"/about.html")
})

app.get("/contact",(req, resp)=>{
   resp.sendFile(absultePatth+"/contact.html")
})

app.use((req, resp) =>{
   resp.status(404).sendFile(absultePatth+"/404.html")
})

app.listen(3200)