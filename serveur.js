const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-Parser')
const connection = require('./config/database')
const serveur = express()
const port = 3002


//*************//
// Middlewares //
//*************//

// Log des requetes HTTP
serveur.use(morgan('dev'))

//Gestion du CORS
serveur.use(cors())

// utiliser le module de parsing
serveur.use(bodyParser.json());


//*************//
//   Routes    //
//*************//

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


//Ajouter un nouveau message
serveur.post('/postMessage', (req,res)=>{
  console.log(req.body)

  
  const values = [req.body.pseudo,req.body.content]
  connection.query("INSERT INTO message (pseudo, content) VALUES (?,?) " , values , (err,res)=>{
    if(err) throw err    
  })
  res.status(201).json({
    message: 'Objet créé !'
  })
})





serveur.listen(port,()=>{
  console.log(`Serveur lancé et en écoute sur le port ${port}`);
})