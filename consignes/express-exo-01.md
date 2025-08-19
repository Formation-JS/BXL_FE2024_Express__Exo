# Express - Exo 01

## Créer un nouveau projet node
- Le projet doit être configurer avec npm
- Les fichiers "code" doivent être dans le dossier "src"

## Mise en place d'un web serveur express
- Initialiser express
- Utiliser les variables d'environnment pour "PORT" et "NODE_ENV"
- Mettre en place les deux routes suivantes : 
    - La route « /exo1/number » doit renvoyer un nombre aleatoire (entier entre 0 et 100) au format JSON  
      _Exemple de réponse :_ `{ number: 42 }` 
    - La route « /exo1/hello/<nom> » doit renvoyer une phrase de salutation adressé à la personne  
      _Exemple d'url :_ "http://localhost:8080/exo1/hello/della"  
      _Exemple de la réponse :_ `"Bien le bonjour Della !"`
