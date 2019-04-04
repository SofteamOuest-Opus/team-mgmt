# team-mgmt
Team management : manage projects, teams and members team.

# Documentation
## Best practices NodeJs
https://github.com/i0natan/nodebestpractices#1-project-structure-practices
## require() vs import
https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e

#Analyse:
require executé dynamiquement lors de l'execution du code js, alors que import évalué avant execution
es importations doivent être idempotentes - elles renvoient toujours exactement le même ensemble immuable de symboles chaque fois que l'importation est appelée dans un contexte donné

ES 6:
En termes de Node.js, cela signifie que le chargement du contenu du script, la résolution des importations et des exportations de modules et l’évaluation du code de module se déroulent sur plusieurs tours de la boucle d’événements.

-> avec require, on peut surchargé une méthode d'une librairie et cela rend require non idempotent
require fonction synchrone

-> avec import , un librairie importée peut moins facilement être surchargée
-->peut poser problème pour les tests mockés et les APM (Application Management Monitoring) par exemple
Pas encore de support natif de import dans CommonJS et de require dans ECMA


--> utiliser Babel

## Framework building REST API
Express ou Koa
https://raygun.com/blog/koa-vs-express-2018/

## Gestion montée version bdd
node-flywaydb


## Génération du squelette applicatif
npm install express-generator -g
express --view=pug myapp


## specifications


Log:
Utiliser CustomLogger

Resource REST :
Créer un fichier *Routes. 
Chaque fichier route doit etre prefixé de l'entité gérée, en camel case. Exemple teamsRoutes
Chaque fichier route doit être importée dans server.js et prendre en paramètre ou injecter la constante app.
Chaque route doit produire un log en entrée et en sortie avec l'objet en entrée/sortie.

Fichier de migration sql:
Créer un fichier dans le dossier back/docker/flyway/migration

## Docker execution
Le lancement des différents composants se fait dans cet ordre :

BACK :
- un container docker postgresql pour la bdd
- un container docker flyway attend la bdd pour lancer les scripts de migration
- un container docker lance un keycloak
- un container docker lance un kafka
- un container docker node fait un npm run start


   
 