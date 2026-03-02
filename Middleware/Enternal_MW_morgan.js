import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'))
app.get("/", (req, resp) => {
    resp.send("<h1> home page </h1>");
});
app.get("/login", (req, resp) => {
    resp.send("<h1> login page </h1>");
});
app.get("/user", (req, resp) => {
    resp.send("<h1> User page </h1>");
});

app.get("/wait", (req, resp) => {
    setTimeout(() =>{
        resp.send("<h1> Opend after 2 sec </h1>");
    },2000)
    
});

app.listen(9999);