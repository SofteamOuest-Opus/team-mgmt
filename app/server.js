import bodyParser from 'body-parser';
import teamsRoutes from './routes/TeamsRoutes';
import express from 'express';
import logger from './config/CustomLogger';

const app = express();



//lancement du serveur
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//chargemetn des loggers
logger();
//chargement de l'api teamsRoutes
teamsRoutes(app);