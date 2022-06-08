
// Imports
const express = require('express');
const path = require('path');
const app = express();
const port = 8080

const db = require('./models/db');


// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index', { text: 'This is EJS' })
});

app.get('/about', (req, res) => {
  res.render('about', { text: 'This is About' })
});

app.get('/griffindor', (req, res) => {
  res.render('griffindor', { text: 'This is Grifnoriaaa' })
});

app.get('/slytherin', (req, res) => {
  res.render('slytherin', { text: 'This is Sonserinaaa' })
});

app.get('/hufflepuff', (req, res) => {
  res.render('hufflepuff', { text: 'This is LufaLufaaa' })
});

app.get('/ravenclaw', (req, res) => {
  res.render('ravenclaw', { text: 'This is Corvitalll' })
});


// Cadastro
app.post('/cadastrar', async (req, res) => {

});


// Define listenner port for run server and return address for development
app.listen(port, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
