

import express from "express";

const  app = express();

app.set('view engine', 'ejs')
app.get("/",(req,resp)=>(
    resp.render('home',{name:"talha", course:"EJS", age:19})
))
app.listen(3200)