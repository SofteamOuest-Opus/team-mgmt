import bodyParser from 'body-parser';
import teamsRoutes from './routes/TeamsRoutes';
import express from 'express';
import logger from './config/CustomLogger';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import loginRoutes from './routes/LoginRoutes';


const app = express();
const router = express.Router();

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
    store: memoryStore
});


//spécification des options de session keycloak
// on donne un secret fournie par keycloak
const sessionOptions = {
    secret: 'd2188556-28d1-445f-8775-7fd64d3457c6',
    bearerOnly: true,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
};
//enchainement des middlewares
//décodage du body de la requete
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//appel d'une session keycloak
app.use(session(sessionOptions));
app.use(keycloak.middleware());
//appel de la route de l'API REST
app.use(router);

//chargement de l'api teamsRoutes
teamsRoutes(app, router, keycloak);
loginRoutes(app,router,keycloak);
//lancement du serveur
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
