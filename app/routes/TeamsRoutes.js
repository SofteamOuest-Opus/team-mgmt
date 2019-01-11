import express from 'express';
import {saveTeam} from '../producers/TeamManager';
import customLogger from '../config/CustomLogger';
import * as cls from 'continuation-local-storage';
import connexion from '../dao/connexion';

var logger = customLogger();
const conn = connexion();
export default function (app) {
    const router = express.Router();
    router.use((req, res, next) => {
        //${info.timestamp}-${info.level}-${info.logger}-${info.code}-${info.correlationId}-${info.message}-${info.stackTrace}
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({message: req.method + req.url});
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({message: req.method + req.url + ',' + JSON.stringify(req.body)});
        }

        // var dbNamespace = cls.getNamespace('db');
        // dbNamespace.bindEmitter(req);
        // dbNamespace.bindEmitter(res);
        // dbNamespace.bind(next);
        // // run middleware in the scope of the namespace that we have created
        // dbNamespace.run(async () => {
        //     const transaction = await conn.transaction();
        //     dbNamespace.set('transaction', transaction);
        //
        //     onFinished(res, (err) => {
        //         if (!err) {
        //             transaction.commit();
        //         } else {
        //             transaction.rollback();
        //         }
        //     });
        //     next();
        // });
        next();
    });

    router.get('/teams/:id', (req, res, next) => {
        const team = {id: 'La TEAM', members: []};
        return res.json(team);
        next();
    }, (req, res, next) => {
        console.log('Request Type:', req.method);
        next();
    });

    router.put('/teams/:id', (req, res, next) => {
        let team = req.body;
        return res.json(saveTeam(team));
    });
    app.use('/', router);
};