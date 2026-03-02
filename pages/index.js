// const express = require("express")

import express from "express";
import home from "./home.js";
import about from "./about.js"

const  app = express();

app.get("/",(req,resp)=>(
    resp.end(home())
))
app.get("/about",(req,resp)=>(
    resp.end(about())
))
app.get("/contact",(req,resp)=>(
    resp.end("<h1> Thais is contact page  </h1>")
))

app.listen(3200)