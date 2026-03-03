import express from "express"

const app=  express();


app.get("/",(req, resp)=>{

    const users = ['malik','abutalha','raheem','khan','ahmad'];
    let data = '<ul>';
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
          // Capitalize first letter
        const capitalName = users[i].charAt(0).toUpperCase() + users[i].slice(1);

        data += `<li><a href="/user/${capitalName}">${capitalName}</a></li>`;
        
        
    }
    data+=`</ul>`
    resp.send(data)
})

app.get('/user/:name',(req,resp) =>{
    const username = req.params.name;
    resp.send( `This is ${username} profle page ` )
})

app.listen(3200)