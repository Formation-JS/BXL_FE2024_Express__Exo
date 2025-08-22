import express from 'express';
import timeRouter from './routers/time.router.js';

//? Extraction des données d'environnment
const { NODE_ENV, PORT } = process.env;

//? Initialisation de l'app "Express JS"
const app = express();

//? Configuration de l'app
//! - Logger Middleware 
app.use((req, res, next) => {
    // Debut logger
    const { url, method } = req;
    const startRequest = new Date();

    // Prochain middleware
    next();

    // Fin logger
    const endRequest = new Date();
    const time = endRequest.getTime() - startRequest.getTime();
    const statusCode = res.statusCode;

    console.log();
    console.log(`${startRequest.toISOString()}: ${url} (${method})`);
    console.log(`Response ${time}ms [${statusCode}]`);
});

//! - Pagination Middleware
// Objectif -> « ?offset=10&limit=5 » sont injecté dans  req.pagination
app.use((req, res, next) => {
    // Récuperation des SearchParams
    const offsetUrl = parseInt(req.query.offset);
    const limitUrl = parseInt(req.query.limit);

    // Inject dans l'objet request
    req.pagination = {
        offset: !isNaN(offsetUrl) ? offsetUrl : 0,
        limit: !isNaN(limitUrl) ? limitUrl : 10
    };

    // Middleware suivant !
    next();
});

//? Ajout des routes de l'exercice 01
app.get('/exo1/number', (req, res) => {
    const val = Math.round(Math.random() * 100);
    res.json({ number: val });
});

app.get('/exo1/hello/:name', (req, res) => {
    const { name } = req.params;

    const firstNameLetter = name[0].toUpperCase();
    res.send(`Bien le bonjour ${firstNameLetter + name.slice(1)}`)
});

//? Ajout des routers
app.use('/exo2', timeRouter);

//? Middleware d'erreur
app.use((error, req, res, next) => {
    // Définition du status de la requete
    res.status(500);

    // Réponse en mode DEV
    if (NODE_ENV === 'dev') {
        res.json({
            name: error.name,
            message: error.message ?? 'Aucun message',
            content: error.stack
        });
        return;
    }

    // Réponse "standart"
    res.json({
        message: `Une erreur s'est produit ! (${error.name})`
    });
});

//? Démarrage du serveur
app.listen(PORT, (error) => {
    if(error) {
        console.log('Une erreur s\'est produit lors du lancement du serveur Web');
        console.log(error);
        return;
    }

    console.log(`Le web serveur tourne sur le port ${PORT} en mode "${NODE_ENV}"`);
});