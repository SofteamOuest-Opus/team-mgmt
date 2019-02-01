import express from 'express';

import customLogger from '../config/CustomLogger';
import {getAll, save, get} from '../producers/TeamManager';

const logger = customLogger();

export default function (app) {
    const router = express.Router();


    router.use((req, res, next) => {
        //${info.timestamp}-${info.level}-${info.logger}-${info.code}-${info.correlationId}-${info.message}-${info.stackTrace}
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({message: req.method + req.url});
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({message: req.method + req.url + ',' + JSON.stringify(req.body)});
        }

        next();
    });

    router.get('/teams/:id', async (req, res, next) => {
        let team = await get(req.params.id);
        res.json(team);
        next();
    }, async (req, res, next) => {
        next();
    });


    router.get('/teams', async (req, res, next) => {
        let teams = await getAll();
        res.json(teams);
        next();
    }, async (req, res, next) => {
        next();
    });


    router.put('/teams/:id', async (req, res, next) => {
        let team = await req.body;
        const promise = await save(team);
        const json = res.json(promise);
        return json;
    });
    app.use('/', router);

};