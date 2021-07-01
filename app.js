const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(__dirname+ '/public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home.html', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register.html', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(PORT, () => {
    console.log("Servidor activo en el puerto " + PORT);
});
