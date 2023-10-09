const express = require("express");
const router = express.Router();
const login = require("./login");


router.get("/login", (req, res)=>{
    res.render("login");
});

router.post("/salvarlogin", (req, res)=>{
    var usuario = req.body.usuario;
    var email = req.body.email;
    var senha = req.body.senha;
    Login.create({
        usuario: usuario,
        email: email,
        senha: senha
    }).then(()=>{
        res.redirect("/");
    });
});

router.get("/loginlist", (req, res)=>{
    Produto.findAll({raw: true}).then(login=>{
        console.log(login);
    });
    res.render("index");
});

module.exports = router