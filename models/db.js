const Sequelize = require('sequelize');

const db = new Sequelize("HPSTORE", "swygax", "3526", {
  host: 'localhost',
  dialect: 'mysql'
});

db.authenticate()
  .then(function() {
    console.log("Conexão com o banco de dados realizada com sucesso");
  }).catch(function() {
    console.log("ERRO: Conexão com banco de dados não realizada com sucesso!");
  });

module.exports = db;

