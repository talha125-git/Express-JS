import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Middleware to read form data
app.use(express.urlencoded({extended:true}))

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Connect to MongoDB
client.connect().then((connection) => {
    const db = connection.db(dbName);

    // API route → return students data as JSON
    app.get("/api", async (req, resp) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        resp.send(students);
    });

    // Set EJS template engine
    app.set("view engine", "ejs")

    // Home page → show students in UI
    app.get("/", async (req, resp) => {
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        resp.render("students", { students });
    });

    // Show add student form
    app.get("/add", (req, resp) => {
        resp.render("add-student")
    })

    // Insert new student into MongoDB
    app.post("/add-student", async (req, resp) => {
        console.log(req.body);
        const collection = db.collection("students")
        const results = await collection.insertOne(req.body)
        console.log(results);
        
        resp.send("students");
    });

});

// Start server
app.listen(2000)