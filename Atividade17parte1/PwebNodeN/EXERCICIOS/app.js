var express = require('express');
var app = express();//executando express

app.set('view engine', 'ejs');

app.get("/formulario_adicionar_usuario", function(req, res){
    res.render("admin/adicionar_usuario");
})

/*app.get('/historia', function(req,res){
    //res.end("<html><body>História da Fatec Sorocaba</body></html>");
    res.render("secao/historia");
});*/

app.get('/informacao/historia', function(req,res){
    //res.end("<html><body>História da Fatec Sorocaba</body></html>");
    res.render("informacao/historia")});

/*app.get('/cursos', function(req, res){
    //res.end("<html><body>Cursos da Fatec Sorocaba</body></html>")
    res.render("secao/cursos");
});*/

app.get('/informacao/cursos', function(req, res){
    //res.end("<html><body>Cursos da Fatec Sorocaba</body></html>")
    res.render("informacao/cursos")});


/*app.get('/professores', function(req,res){
    //res.end("<html><body>Professores da Fatec Sorocaba</body></html>")
    res.render('secao/professores');
})*/

app.get('/informacao/professores', function(req,res){
    //res.end("<html><body>Professores da Fatec Sorocaba</body></html>")
    res.render('/informacao/professores')});

app.get('/home/index', function(req,res){
    //res.end("<html><body>Site da Fatec Sorocaba</body></html>")
    res.render("home/index");
})

app.listen(3000, function(){
    console.log("servidor com express foi carregado");
});