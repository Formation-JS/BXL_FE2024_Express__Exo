import express from 'express';

//? Extraction des données d'environnment
const { NODE_ENV, PORT } = process.env;

//? Initialisation de l'app "Express JS"
const app = express();

//? Configuration de l'app
//  ...

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

//? Démarrage du serveur
app.listen(PORT, (error) => {
    if(error) {
        console.log('Une erreur s\'est produit lors du lancement du serveur Web');
        console.log(error);
        return;
    }

    console.log(`Le web serveur tourne sur le port ${PORT} en mode "${NODE_ENV}"`);
});