import { Router } from "express";
import timeController from "../controllers/time.controller.js";


const timeRouter = Router();

// Routing pour la route : /exo2/jour
timeRouter.get('/jour', timeController.getInfoJour);

// Routing pour les routes : /exo2/detail/mardi  ou  /exo2/d/mardi 
timeRouter.get('/d{etail}/:jourSemaine', timeController.getJourSemaine);

// Routing pour la route : /exo2/mois
timeRouter.get('/mois', timeController.getListeMois);

export default timeRouter;