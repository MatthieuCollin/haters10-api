import express,{ Express } from "express";
import mysql from "mysql2";
import bagRepository from './repositories/bag/bag.repository'

const app: Express = express();

app.use(express.json());

export const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'haters'
})


app.get("/bags", function (req, res){
    async function retrieve(){
        let response = await bagRepository.retrieveAll();
        res.send(response)
    }
    retrieve();
})

app.post("/bag/add", function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await bagRepository.addBag(json.name, json.price, json.man, json.woman, json.company, json.type)
        res.send(response);
        
    }
    retrieve();
})


app.listen(8000,()=>{
    console.log('serveur sur le port 8000')
})