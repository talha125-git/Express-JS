import { usersList } from "../model/userModel.js";

export function handleUsers (req, resp){
    const userData = usersList()
    console.log(userData);
    
    resp.render('user',{users:userData});
    
}