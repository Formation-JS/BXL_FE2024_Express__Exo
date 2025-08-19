# Express - Exo 02
Sur base de l'exercice précédent

## Ajouter les routes suivantes en utiliser l'objet "Router" et un controller
- Adapter la structure pour utiliser les controllers  
  _NB: Pas besoin de modifier les routes précédentes_

- Mettre en place les deux routes suivantes : 

  - La route « /exo2/jour » qui affichage la date en français  
    _Exemple de réponse :_ `"Le mardi 19 Août 2025"`

  - La route « /exo2/detail/:JourSemaine »  
    - Cas de réponse :  
      _Exemple d'url :_ "http://localhost:8080/exo2/detail/mardi"  
      _Exemple de la réponse :_ `"Mardi est le 2e jour de la semaine !"`  
    - Cas d'erreur :  
      _Exemple d'url :_ "http://localhost:8080/exo2/detail/jeudredi"  
      _Exemple de la réponse :_ `"Ce jour de la semaine n'existe pas !"` (Requete -> Erreur 404)

  - La route « /exo2/d/:JourSemaine » doit donner le même resultat que la route « /exo2/detail/:JourSemaine ».

  - La route « /exo2/mois » qui affiche la liste des mois  
    Possibilité d'utiliser des filtres pour : le lettre du mot, le nombre de jours dans le mois.  
    - Sans filtre :  
      _Exemple d'url :_ "http://localhost:8080/exo2/mois"  
      _Exemple de la réponse :_ `[ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]`  
    - Filtre pour les letters :  
      _Exemple d'url :_ "http://localhost:8080/exo2/mois?query=i"  
      _Exemple de la réponse :_ `['Fevrier', 'Avril', 'Mai', 'Juin', 'Juillet']`
