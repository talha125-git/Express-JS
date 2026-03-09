import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

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

    // POST Method REST API

    app.post("/add-student-api", async (req, resp) => {
        console.log(req.body);
        const { id, name, age, dept } = req.body;

        if (!id || !name || !age || !dept) {
            resp.send({ message: "operation failed", success: false })
            return
        }

        const collection = db.collection("students")
        const results = await collection.insertOne(req.body)

        resp.send({ message: "Data stored in MDB", success: true, result: results })

    })
    app.delete("/delete/:id", async (req, resp) => {
        console.log(req.params.id);
        const collection = db.collection("students")
        const results = await collection.deleteOne({ _id: new ObjectId(req.params.id) })
        if (results) {
            resp.send({
                message: "studend record deleted",
                success: true
            })

        } else {
            resp.send({
                message: "studend record not deleted try after same time ",
                success: false
            })
        }


    })
    app.get("/delete/:id", async (req, resp) => {
        const collection = db.collection("students")
        const results = await collection.deleteOne({ _id: new ObjectId(req.params.id) })

        if (results.deletedCount > 0) {
            resp.send(`
            <script>
                alert("Student record deleted successfully");
                window.location.replace("/");
            </script>
        `)
        } else {
            resp.send(`
            <script>
                alert("Student record not deleted");
                window.location.replace("/");
            </script>
        `)
        }
    })

    app.get("/student/:id", async (req, resp) => {
        const collection = db.collection("students")
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
        resp.render("update-student", { result })
    })

    app.get("/student/:id", async (req, resp) => {
        const collection = db.collection("students")
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })

        resp.send({
            message: "data fetched",
            success: true,
            result: result,
        })
    })
    app.post("/update/:id", async (req, resp) => {
        console.log(req.body);
        console.log(req.params.id);

        const collection = db.collection("students");

        const filter = { _id: new ObjectId(req.params.id) };
        const updatee = { $set: req.body };

        const result = await collection.updateOne(filter, updatee);

        if(result){
        resp.send("Data updated");    
        }else{
        resp.send("Data not updated");    
        }
    })

    app.put("/update/:id", async (req, resp) => {
        console.log(req.body);
        console.log(req.params.id);

        const collection = db.collection("students");

        const filter = { _id: new ObjectId(req.params.id) };
        const updatee = { $set: req.body };

        const result = await collection.updateOne(filter, updatee);

        if(result){
        resp.send({
            message: "Data Updated ",
            success: true,
            result: result,
        })    
        }else{
        resp.send({
            message: "Data not Updated",
            success: false,
            result: result,
        })  
        }
    })

});

// Start server
app.listen(2000)