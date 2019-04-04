import customLogger from '../config/CustomLogger';
import {getAll, save, get} from '../producers/TeamManager';

import transactionMiddleware from '../config/TransactionMiddleware';

const logger = customLogger();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};

export default function (app, router, keycloak) {

    router.use((req, res, next) => {
        //${info.timestamp}-${info.level}-${info.logger}-${info.code}-${info.correlationId}-${info.message}-${info.stackTrace}
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