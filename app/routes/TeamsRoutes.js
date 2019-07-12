import customLogger from '../config/CustomLogger';
import {getAll, save, get} from '../producers/TeamManager';

import transactionMiddleware from '../config/TransactionMiddleware';

const logger = customLogger();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};

export default function (app, router, keycloak) {
    var corsOptions = {
        origin: 'http://example.com',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({message: req.method + req.url});
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({message: req.method + req.url + ',' + JSON.stringify(req.body)});
        }

        next();
    });

    router.get('/teams/:id', keycloak.protect(), asyncMiddleware(async (req, res) => {
        let team = await get(req.params.id);
        res.json(team);

    }));


    router.get('/teams', keycloak.protect(), transactionMiddleware(), asyncMiddleware(async (req, res) => {

        let teams = await getAll();
        res.header("Access-Control-Expose-Headers", "Access-Control-Allow-Origin");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(teams);

    }));


    router.post('/teams', transactionMiddleware(), asyncMiddleware(async (req, res) => {

        logger.info(JSON.stringify(req.body));

        let team = req.body;

        logger.info({message: 'team:' + JSON.stringify(team)});

        const promise = await save(team);
        const json = res.json(promise);
    }));

    router.put('/teams/:id', transactionMiddleware(), asyncMiddleware(async (req, res) => {
        let team = await req.body;

        logger.info({message: 'team:' + JSON.stringify(team)});
        const promise = await save(team);
        const json = res.json(promise);
    }));

    app.use('/', router);
};