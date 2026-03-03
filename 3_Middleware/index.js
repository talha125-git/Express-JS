import express from "express";

const app = express();

function CheckAgeRouteMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send("You are not allowed to access this website");
    } else {
        next();
    }
}

function Check_URL_RouteMiddleware(req, resp, next) {
    console.log("this request url is ->", req.url);
    next();
}

app.get("/", (req, resp) => {
    resp.send("Home page");
});

app.get("/login", Check_URL_RouteMiddleware, (req, resp) => {
    resp.send("Login page");
});

app.get("/users",
    CheckAgeRouteMiddleware,
    Check_URL_RouteMiddleware,
    (req, resp) => {
        resp.send("User page");
    }
);

app.get("/products", (req, resp) => {
    resp.send("Products page");
});

app.listen(3200);