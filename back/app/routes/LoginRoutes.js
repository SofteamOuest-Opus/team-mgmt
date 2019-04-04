import customLogger from '../config/CustomLogger';
const logger = customLogger();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};

export default function (app, router, keycloak) {

    router.use((req, res, next) => {
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({message: req.method + req.url});
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({message: req.method + req.url + ',' + JSON.stringify(req.body)});
        }
        next();
    });

    router.get('/environment', keycloak.protect(), asyncMiddleware(async (req, res) => {
        var env = {
          'status' :'connected'
        };
        res.json(env);
    }));


    app.use('/', router);
};