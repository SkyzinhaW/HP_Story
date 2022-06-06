
// Imports
const express = require('express');
const path = require('path');
const app = express();
const port = 8080

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


app.listen(port, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
