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
        if (!jourValide) {
            res.status(404).send('Ce jour de la semaine n\'existe pas !');
            return;
        }

        // La journée existe !
        res.send(`${jourValide.nom} est le ${jourValide.position} jour de la semaine !`);
    },

    getListeMois: (req, res) => {

        // La liste des mois possible
        const mois = [
            { nom: 'Janvier', nbJour: 31 },
            { nom: 'Février', nbJour: [28, 29] },
            { nom: 'Mars', nbJour: 31 },
            { nom: 'Avril', nbJour: 30 },
            { nom: 'Mai', nbJour: 31 },
            { nom: 'Juin', nbJour: 30 },
            { nom: 'Juillet', nbJour: 31 },
            { nom: 'Août', nbJour: 31 },
            { nom: 'Septembre', nbJour: 30 },
            { nom: 'Octobre', nbJour: 31 },
            { nom: 'Novembre', nbJour: 30 },
            { nom: 'Décembre', nbJour: 31 }
        ];

        // Gestion des filtres
        //? - Récuperation des données de filtre -> SearchParams (Accessible depuis req.query)
        const q = req.query.q?.toLowerCase()?.trim();
        const nb = parseInt(req.query.nb);

        console.log(nb, typeof nb);

        //? - Traitement
        let result = [...mois];
        if (!isNaN(nb)) {
            result = result.filter(m => (Array.isArray(m.nbJour)) ? m.nbJour.includes(nb) : m.nbJour === nb);
        }
        if (q !== undefined && q !== '') {
            result = result.filter(m => m.nom.toLowerCase().includes(q));
        }

        //? Ecriture alternative
        // const result2 = mois.filter(m => !isNaN(nb) ? (Array.isArray(m.nbJour)) ? m.nbJour.includes(nb) : m.nbJour === nb : true)
        //                     .filter(m => (q !== undefined && q !== '') ? m.nom.toLowerCase().includes(q) : true)

        // Renvois des données
        res.json(result.map(m => m.nom));
    },

};

export default timeController;