import e from "express";
import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.send("<h1> home page </h1>");
});
app.get("/login", (req, resp) => {
    resp.send("<h1> login page </h1>");
});
app.get("/user", (req, resp) => {
    resp.send1("<h1> User page </h1>");
});


function error_handling(error, req,resp,next) {
    resp.status(error.status || 500).send("there is error solve it ")
}
app.use(error_handling)

app.listen(1122);