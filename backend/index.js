const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//apos o bodyparser
app.use("/", produtoController);

//definindo a pasta de arquivos estaticos
app.use(express.static('public'));

app.listen(8080, ()=>{
    console.log("app rodando");
});

app.get("/", (req, res)=>{
    res.render('index');
});
