'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app, router, keycloak) {

    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({ message: req.method + req.url });
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({ message: req.method + req.url + ',' + JSON.stringify(req.body) });
        }

        next();
    });

    router.get('/teams/:id', keycloak.protect(), asyncMiddleware((() => {
        var _ref = _asyncToGenerator(function* (req, res) {
            let team = yield (0, _TeamManager.get)(req.params.id);
            res.json(team);
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })()));

    router.get('/teams', keycloak.protect(), (0, _TransactionMiddleware2.default)(), asyncMiddleware((() => {
        var _ref2 = _asyncToGenerator(function* (req, res) {

            let teams = yield (0, _TeamManager.getAll)();
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            res.json(teams);
        });

        return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    })()));

    router.post('/teams', (0, _TransactionMiddleware2.default)(), asyncMiddleware((() => {
        var _ref3 = _asyncToGenerator(function* (req, res) {

            logger.info(JSON.stringify(req.body));

            let team = req.body;

            logger.info({ message: 'team:' + JSON.stringify(team) });

            const promise = yield (0, _TeamManager.save)(team);
            const json = res.json(promise);
        });

        return function (_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    })()));

    router.put('/teams/:id', (0, _TransactionMiddleware2.default)(), asyncMiddleware((() => {
        var _ref4 = _asyncToGenerator(function* (req, res) {
            let team = yield req.body;

            logger.info({ message: 'team:' + JSON.stringify(team) });
            const promise = yield (0, _TeamManager.save)(team);
            const json = res.json(promise);
        });

        return function (_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    })()));

    app.use('/', router);
};

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

var _TeamManager = require('../producers/TeamManager');

var _TransactionMiddleware = require('../config/TransactionMiddleware');

var _TransactionMiddleware2 = _interopRequireDefault(_TransactionMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const logger = (0, _CustomLogger2.default)();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMvVGVhbXNSb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwicm91dGVyIiwia2V5Y2xvYWsiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwibG9nZ2VyIiwiaW5mbyIsIm1lc3NhZ2UiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsImdldCIsInByb3RlY3QiLCJhc3luY01pZGRsZXdhcmUiLCJ0ZWFtIiwicGFyYW1zIiwiaWQiLCJqc29uIiwidGVhbXMiLCJwb3N0IiwicHJvbWlzZSIsInB1dCIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQVllLFVBQVVBLEdBQVYsRUFBZUMsTUFBZixFQUF1QkMsUUFBdkIsRUFBaUM7O0FBRTVDRCxXQUFPRSxHQUFQLENBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDM0JELFlBQUlFLE1BQUosQ0FBVyw2QkFBWCxFQUEwQyxHQUExQztBQUNBRixZQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsZ0RBQTNDO0FBQ0EsWUFBSUgsSUFBSUksTUFBSixLQUFlLEtBQWYsSUFBd0JKLElBQUlJLE1BQUosS0FBZSxRQUEzQyxFQUFxRDtBQUNqREMsbUJBQU9DLElBQVAsQ0FBWSxFQUFDQyxTQUFTUCxJQUFJSSxNQUFKLEdBQWFKLElBQUlRLEdBQTNCLEVBQVo7QUFDSCxTQUZELE1BRU8sSUFBSVIsSUFBSUksTUFBSixLQUFlLE1BQWYsSUFBeUJKLElBQUlJLE1BQUosS0FBZSxLQUE1QyxFQUFtRDtBQUN0REMsbUJBQU9DLElBQVAsQ0FBWSxFQUFDQyxTQUFTUCxJQUFJSSxNQUFKLEdBQWFKLElBQUlRLEdBQWpCLEdBQXVCLEdBQXZCLEdBQTZCQyxLQUFLQyxTQUFMLENBQWVWLElBQUlXLElBQW5CLENBQXZDLEVBQVo7QUFDSDs7QUFFRFQ7QUFDSCxLQVZEOztBQVlBTCxXQUFPZSxHQUFQLENBQVcsWUFBWCxFQUF5QmQsU0FBU2UsT0FBVCxFQUF6QixFQUE2Q0M7QUFBQSxxQ0FBZ0IsV0FBT2QsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQzdFLGdCQUFJYyxPQUFPLE1BQU0sc0JBQUlmLElBQUlnQixNQUFKLENBQVdDLEVBQWYsQ0FBakI7QUFDQWhCLGdCQUFJaUIsSUFBSixDQUFTSCxJQUFUO0FBRUgsU0FKNEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBN0M7O0FBT0FsQixXQUFPZSxHQUFQLENBQVcsUUFBWCxFQUFxQmQsU0FBU2UsT0FBVCxFQUFyQixFQUF5QyxzQ0FBekMsRUFBa0VDO0FBQUEsc0NBQWdCLFdBQU9kLEdBQVAsRUFBWUMsR0FBWixFQUFvQjs7QUFFbEcsZ0JBQUlrQixRQUFRLE1BQU0sMEJBQWxCO0FBQ0FsQixnQkFBSUUsTUFBSixDQUFXLDZCQUFYLEVBQTBDLEdBQTFDO0FBQ0FGLGdCQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsZ0RBQTNDOztBQUVBRixnQkFBSWlCLElBQUosQ0FBU0MsS0FBVDtBQUVILFNBUmlFOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWxFOztBQVdBdEIsV0FBT3VCLElBQVAsQ0FBWSxRQUFaLEVBQXNCLHNDQUF0QixFQUErQ047QUFBQSxzQ0FBZ0IsV0FBT2QsR0FBUCxFQUFZQyxHQUFaLEVBQW9COztBQUUvRUksbUJBQU9DLElBQVAsQ0FBWUcsS0FBS0MsU0FBTCxDQUFlVixJQUFJVyxJQUFuQixDQUFaOztBQUVBLGdCQUFJSSxPQUFPZixJQUFJVyxJQUFmOztBQUVBTixtQkFBT0MsSUFBUCxDQUFZLEVBQUNDLFNBQVMsVUFBVUUsS0FBS0MsU0FBTCxDQUFlSyxJQUFmLENBQXBCLEVBQVo7O0FBRUEsa0JBQU1NLFVBQVUsTUFBTSx1QkFBS04sSUFBTCxDQUF0QjtBQUNBLGtCQUFNRyxPQUFPakIsSUFBSWlCLElBQUosQ0FBU0csT0FBVCxDQUFiO0FBQ0gsU0FWOEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBL0M7O0FBWUF4QixXQUFPeUIsR0FBUCxDQUFXLFlBQVgsRUFBeUIsc0NBQXpCLEVBQWtEUjtBQUFBLHNDQUFnQixXQUFPZCxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDbEYsZ0JBQUljLE9BQU8sTUFBTWYsSUFBSVcsSUFBckI7O0FBRUFOLG1CQUFPQyxJQUFQLENBQVksRUFBQ0MsU0FBUyxVQUFVRSxLQUFLQyxTQUFMLENBQWVLLElBQWYsQ0FBcEIsRUFBWjtBQUNBLGtCQUFNTSxVQUFVLE1BQU0sdUJBQUtOLElBQUwsQ0FBdEI7QUFDQSxrQkFBTUcsT0FBT2pCLElBQUlpQixJQUFKLENBQVNHLE9BQVQsQ0FBYjtBQUNILFNBTmlEOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWxEOztBQVFBekIsUUFBSUcsR0FBSixDQUFRLEdBQVIsRUFBYUYsTUFBYjtBQUNILEM7O0FBakVEOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBRUEsTUFBTVEsU0FBUyw2QkFBZjs7QUFFQSxNQUFNUyxrQkFBa0JTLE1BQU0sQ0FBQ3ZCLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEtBQW9CO0FBQzlDc0IsWUFBUUMsT0FBUixDQUFnQkYsR0FBR3ZCLEdBQUgsRUFBUUMsR0FBUixFQUFhQyxJQUFiLENBQWhCLEVBQ0t3QixLQURMLENBQ1d4QixJQURYO0FBRUgsQ0FIRDs7QUEwREMiLCJmaWxlIjoiVGVhbXNSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3VzdG9tTG9nZ2VyIGZyb20gJy4uL2NvbmZpZy9DdXN0b21Mb2dnZXInO1xyXG5pbXBvcnQge2dldEFsbCwgc2F2ZSwgZ2V0fSBmcm9tICcuLi9wcm9kdWNlcnMvVGVhbU1hbmFnZXInO1xyXG5cclxuaW1wb3J0IHRyYW5zYWN0aW9uTWlkZGxld2FyZSBmcm9tICcuLi9jb25maWcvVHJhbnNhY3Rpb25NaWRkbGV3YXJlJztcclxuXHJcbmNvbnN0IGxvZ2dlciA9IGN1c3RvbUxvZ2dlcigpO1xyXG5cclxuY29uc3QgYXN5bmNNaWRkbGV3YXJlID0gZm4gPT4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoZm4ocmVxLCByZXMsIG5leHQpKVxyXG4gICAgICAgIC5jYXRjaChuZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHAsIHJvdXRlciwga2V5Y2xvYWspIHtcclxuXHJcbiAgICByb3V0ZXIudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xyXG4gICAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdFwiKTtcclxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcgfHwgcmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oe21lc3NhZ2U6IHJlcS5tZXRob2QgKyByZXEudXJsfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcgfHwgcmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oe21lc3NhZ2U6IHJlcS5tZXRob2QgKyByZXEudXJsICsgJywnICsgSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIuZ2V0KCcvdGVhbXMvOmlkJywga2V5Y2xvYWsucHJvdGVjdCgpLCBhc3luY01pZGRsZXdhcmUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlYW0gPSBhd2FpdCBnZXQocmVxLnBhcmFtcy5pZCk7XHJcbiAgICAgICAgcmVzLmpzb24odGVhbSk7XHJcblxyXG4gICAgfSkpO1xyXG5cclxuXHJcbiAgICByb3V0ZXIuZ2V0KCcvdGVhbXMnLCBrZXljbG9hay5wcm90ZWN0KCksIHRyYW5zYWN0aW9uTWlkZGxld2FyZSgpLCBhc3luY01pZGRsZXdhcmUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0ZWFtcyA9IGF3YWl0IGdldEFsbCgpO1xyXG4gICAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xyXG4gICAgICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdFwiKTtcclxuXHJcbiAgICAgICAgcmVzLmpzb24odGVhbXMpO1xyXG5cclxuICAgIH0pKTtcclxuXHJcblxyXG4gICAgcm91dGVyLnBvc3QoJy90ZWFtcycsIHRyYW5zYWN0aW9uTWlkZGxld2FyZSgpLCBhc3luY01pZGRsZXdhcmUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XHJcblxyXG4gICAgICAgIGxldCB0ZWFtID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiAndGVhbTonICsgSlNPTi5zdHJpbmdpZnkodGVhbSl9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGF3YWl0IHNhdmUodGVhbSk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHJlcy5qc29uKHByb21pc2UpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIHJvdXRlci5wdXQoJy90ZWFtcy86aWQnLCB0cmFuc2FjdGlvbk1pZGRsZXdhcmUoKSwgYXN5bmNNaWRkbGV3YXJlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB0ZWFtID0gYXdhaXQgcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiAndGVhbTonICsgSlNPTi5zdHJpbmdpZnkodGVhbSl9KTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gYXdhaXQgc2F2ZSh0ZWFtKTtcclxuICAgICAgICBjb25zdCBqc29uID0gcmVzLmpzb24ocHJvbWlzZSk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgYXBwLnVzZSgnLycsIHJvdXRlcik7XHJcbn07Il19