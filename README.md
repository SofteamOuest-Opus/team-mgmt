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
Express Koa
## Gestion montée version bdd
node-flywaydb
