import { MongoClient } from "../17_Set_and_Get_Cookies/node_modules/mongodb/mongodb";

const url = "mongodb+srv://talha_mongo:collage@cluster0.aycxufx.mongodb.net/?appName=Cluster0";
const database = "school";
const colleection ="student";
const client = new MongoClient(url);

client.connect().then(()=>{
    console.log(".......Connected.......");    
})

async function dbConnection() {
    const db = client.db(database);
    const collectResult = db.collection(colleection);
    const result = await collectResult.find().toArray();
    console.log(result);
    
}
dbConnection()