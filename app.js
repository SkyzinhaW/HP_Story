const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.render('src/pages/home/index.html');
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
