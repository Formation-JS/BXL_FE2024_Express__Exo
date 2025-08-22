# Express - Exo 03
Sur base de l'exercice précédent

## Ajouter des middlewares

### Middleware de log
Permet d'afficher une trace dans la console de la requete.  
Le middleware doit afficher :
 - L'url et la méthode de requete reçu.
 - La date de la requete dans le format ISO.
 - Le temps de réponse avec son status.

### Middleware de pagination
Dans le WebServer, on veut mettre en place un mecanisme de pagination.  
Pour cela, les requetes peuvent utiliser les SearchParams `offset` et `limit`.   
Exemple de requete : `localhost:8080/produit?offset=10&limit=5`.

Pour évité que dans chaque méthodes des controllers on doivent traiter "req.query",  
on souhaite ajouter un middleware pour simplifier le code.  


Objectif du middleware, modifier les parametre "req" pour y ajouter les infos de pagination.
```
# Dans le controller, on aura acces à : 
req.pagination.offset  # Offset de la requete sous forme d'entier
req.pagination.limit  # Limit de la requete sous forme d'entier
```
Si la requete n'avait pas de parametre `offset` ou `limit`, le middleware défini valeur par defaut
```
offset = 0
limit = 10
``` 

Pour tester le middleware, faire un simple console.log de l'objet pagination
```
console.log(req.pagination);
```

### Middleware d'erreur
Dans le WebServer, ajouter un middleware de gestion d'erreur.  
Dans celui-ci, on souhaite "capturer" l'erreur pour envoyer une réponse sous forme de JSON.  
Le format de l'erreur varie en fonction du mode de fonctionnement `dev` ou `prod`.  

● En dev :
```
Renvoyer une requete avec le status 500 avec un JSON avec les données suivantes : 
- name : Le nom du type d'erreur.
- message : Le message d'erreur (S'il n'y en a pas, afficher "Aucun message").
- content : Le contenu de la propriété `stack` de l'erreur. 
```

● En prod :
```
Renvoyer une requete avec le status 500 avec un JSON avec la donnée suivante : 
- message : Un message indiquant qu'une erreur s'est produite avec le type d'erreur entre parenthese.
```
