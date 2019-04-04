import bodyParser from 'body-parser';
import teamsRoutes from './routes/TeamsRoutes';
import express from 'express';
import logger from './config/CustomLogger';
import session from 'express-session';
import Keycloak from 'keycloak-connect';


const app = express();
const router = express.Router();

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
    store: memoryStore
});



const sessionOptions = {
    secret: '46aa323e-44c2-4793-bfaf-31a1ed42a952',
    bearerOnly: true,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
};

app.use(bodyParser.json());

app.use(session(sessionOptions));
app.use(keycloak.middleware());
app.use(router);

/*app.use(bodyParser.urlencoded({extended: false}));*/

//chargement de l'api teamsRoutes
teamsRoutes(app, router, keycloak);

//lancement du serveur
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


//chargemetn des loggers
logger();
