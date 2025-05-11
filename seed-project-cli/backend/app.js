const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const messageRoutes = require('./routes/messages');
const autRoutes = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');

// DbConnection loop:
const myDatabase = `mongodb://127.0.0.1:27017/`;
const connectDb = () => 
{
  let timeout = 1000;
  mongoose.connect(myDatabase)
  .then(() => 
  {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
  })
  .catch((error) => 
  {
    console.error('Erro na conexão com o MongoDB:', error);
    setTimeout(() => connectDb(), timeout);
  });
}

connectDb();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
app.use('/messages', messageRoutes);
app.use('/auth', autRoutes);
app.use(function (req, res, next) {
  return res.render('index');
});

module.exports = app;
 