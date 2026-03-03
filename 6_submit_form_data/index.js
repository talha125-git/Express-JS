import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", (req, resp) => {
    resp.send("hello");
});

app.get("/add-user", (req, resp) => {
    resp.render('AddUser');
});

app.post("/submit-user", (req, resp) => {
    const { name, age, email } = req.body; // get form data
    resp.render('SubmitUser', { name, age, email }); // pass data to EJS
});

app.get("/users", (req, resp) => {
    const users = ['Malik','Abutalha','Raheem','khan','Ahmad' ]
    resp.render("users",{users:users,isLogin:false})
});

app.listen(3200)