const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connection = require('./config/database')
const serveur = express()
const port = 3002


// Log des requetes HTTP
serveur.use(morgan('dev'))

//Gestion du CORS
serveur.use(cors())



// Routes

//Home
serveur.get('/',(req,res)=>{
  res.send("Bienvenue sur l'API TCHAT")
})

//Listes des messages
serveur.get('/messages',(req,res)=>{
  connection.query('SELECT * FROM message', (error, results) =>{
    if (error) throw error;
    res.json(results)
  });
})





serveur.listen(port,()=>{
  console.log(`Serveur lancé et en écoute sur le port ${port}`);
})