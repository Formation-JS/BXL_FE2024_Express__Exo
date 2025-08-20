const timeController = {

    getInfoJour: (req, res) => {
        const today = new Date();
        const dateFormated = today.toLocaleDateString('fr-be', {
            dateStyle: 'full'
        });

        res.send("Le " + dateFormated);
    },
    
    getJourSemaine: (req, res) => {
        res.sendStatus(501);
    },
    
    getListeMois: (req, res) => {
        res.sendStatus(501);
    },

};

export default timeController;