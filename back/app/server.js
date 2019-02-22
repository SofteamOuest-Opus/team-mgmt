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
    secret: 'd2188556-28d1-445f-8775-7fd64d3457c6',
    bearerOnly: true,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
};

app.use(session(sessionOptions));
app.use(keycloak.middleware());
app.use(router);
//chargement de l'api teamsRoutes
teamsRoutes(app, router, keycloak);

//lancement du serveur
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//chargemetn des loggers
logger();
