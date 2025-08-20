const timeController = {

    getInfoJour: (req, res) => {
        const today = new Date();
        const dateFormated = today.toLocaleDateString('fr-be', {
            dateStyle: 'full'
        });

        res.send("Le " + dateFormated);
    },

    getJourSemaine: (req, res) => {
        // Récuperation du parametre de la route ":jourSemaine"
        const { jourSemaine } = req.params;

        // Detection si la journée de la semaine existe
        const tabJours = [
            { nom: 'lundi', position: '1er' },
            { nom: 'mardi', position: '2e' },
            { nom: 'mercredi', position: '3e' },
            { nom: 'jeudi', position: '4e' },
            { nom: 'vendredi', position: '5e' },
            { nom: 'samedi', position: 'meilleur' },
            { nom: 'dimanche', position: 'dernier' },
        ];
        
        const jourValide = tabJours.find(jour => jour.nom === jourSemaine.toLowerCase());

        // Si la journée n'existe pas -> Erreur 404
        if(!jourValide) {
            res.status(404).send('Ce jour de la semaine n\'existe pas !')
            return;
        }

        // La journée existe !
        res.send(`${jourValide.nom} est le ${jourValide.position} jour de la semaine !`)
    },

    getListeMois: (req, res) => {
        res.sendStatus(501);
    },

};

export default timeController;