const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./Database/database");

const login = require("./login/login");

connection
    .authenticate()
    .then(()=>{
        console.log("conexao feita com o db");
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//EJS como view engine
app.set('view engine', 'ejs');

app.listen(8080, ()=>{
    console.log("app rodando");
});

app.get("/", (req, res)=>{
    res.render("index");
});