import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/",(req,resp)=>{
    resp.send({
        name: "Talha",
        age:20,
        email: "abutalhaa844@gmail.com",
    })
})

app.listen(3200)