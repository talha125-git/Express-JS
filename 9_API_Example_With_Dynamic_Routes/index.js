import express from "express"
import userdata from "./user.json" with {type:'json'}

const app=  express();



app.get('/',(req,resp) =>{
    console.log(userdata);
    
    resp.send(userdata )
})

app.get('/userid/:id',(req,resp) =>{
    const userid = req.params.id;
    
    let filteredData = userdata.filter((user) => user.id==userid) 
    resp.send(filteredData)
})

app.get('/username/:name', (req, resp) => {
    const username = req.params.name.toLowerCase(); // lowercase from URL

    let filteredData = userdata.filter( (user) => user.name.toLowerCase() === username );

    resp.send(filteredData);
});


app.listen(3200)