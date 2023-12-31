import express,{ Express } from "express";
import mysql from "mysql2";
import bagRepository from './repositories/bag/bag.repository'
import hatRepository from "./repositories/hat/hat.repository";
import companyRepository from "./repositories/company/company.repository";
import typeRepository from "./repositories/type/type.repository";

const app: Express = express();

app.use(express.json());

export const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'haters'
})



// ROUTE SAC

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

app.delete("/bag/delete/:id", function(req, res){
    async function retrieve(){
        let response = await bagRepository.deleteBag(req.params.id);
        res.send(response);
    }
    retrieve();
});


app.post('/bag/update/:id', function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await bagRepository.updateBag( req.params.id ,json.name, json.price, json.man, json.woman, json.company, json.type)
        res.send(response);
    }
    retrieve();
})


// ROUTE CHAPEAU

app.get("/hats", function (req, res){
    async function retrieve(){
        let response = await hatRepository.retrieveAll();
        res.send(response)
    }
    retrieve();
})

app.post("/hat/add", function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await hatRepository.addHat(json.name, json.price, json.man, json.woman, json.company, json.type)
        res.send(response);
        
    }
    retrieve();
})

app.delete("/hat/delete/:id", function(req, res){
    async function retrieve(){
        let response = await hatRepository.deleteHat(req.params.id);
        res.send(response);
    }
    retrieve();
});


app.post('/hat/update/:id', function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await hatRepository.updateHat( req.params.id ,json.name, json.price, json.man, json.woman, json.company, json.type)
        res.send(response);
    }
    retrieve();
})

// ROUTE COMPANY
app.get("/companies", function (req, res){
    async function retrieve(){
        let response = await companyRepository.retrieveAll();
        res.send(response)
    }
    retrieve();
})

app.post("/company/add", function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await companyRepository.addCompany(json.name)
        res.send(response);
        
    }
    retrieve();
})

app.delete("/company/delete/:id", function(req, res){
    async function retrieve(){
        let response = await companyRepository.deleteCompany(req.params.id);
        res.send(response);
    }
    retrieve();
});


app.post('/company/update/:id', function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await companyRepository.updateCompany( req.params.id ,json.name)
        res.send(response);
    }
    retrieve();
})

// ROUTE TYPE
app.get("/types", function (req, res){
    async function retrieve(){
        let response = await typeRepository.retrieveAll();
        res.send(response)
    }
    retrieve();
})

app.post("/tyoe/add", function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await typeRepository.addType(json.name)
        res.send(response);
        
    }
    retrieve();
})

app.delete("/type/delete/:id", function(req, res){
    async function retrieve(){
        let response = await typeRepository.deleteType(req.params.id);
        res.send(response);
    }
    retrieve();
});


app.post('/type/update/:id', function(req, res){
    async function retrieve(){
        let json = req.body;
        let response = await typeRepository.updateType( req.params.id ,json.name)
        res.send(response);
    }
    retrieve();
})


app.listen(8000,()=>{
    console.log('serveur sur le port 8000')
})