const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config()


const url = process.env.BD_URL;
const options = { useUnifiedTopology: true , useNewUrlParser: true};

mongoose.connect(url,options);


mongoose.connection.on('error', (err) =>{
    console.log(`Erro na conexão com o banco de dados: ${err} `);
})

mongoose.connection.on('connected',() =>{
    console.log("Conectado com sucesso ao banco de dados");
})

mongoose.connection.on('disconnected',() =>{
    console.log("aplicação desconectada do banco de dados");
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const usersRoute = require('./src/Routes/users');
const figuresRoute = require('./src/Routes/figures');

app.use('/users',usersRoute); //criando a rota de usuario
app.use('/figures',figuresRoute); //criando a rota de figures
app.use((req, res) => {
    res.send('404: Página não encontrada')
})




app.listen(3003);

module.exports = app;