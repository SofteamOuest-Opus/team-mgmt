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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMvVGVhbXNSb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwicm91dGVyIiwia2V5Y2xvYWsiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwibG9nZ2VyIiwiaW5mbyIsIm1lc3NhZ2UiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsImdldCIsInByb3RlY3QiLCJhc3luY01pZGRsZXdhcmUiLCJ0ZWFtIiwicGFyYW1zIiwiaWQiLCJqc29uIiwidGVhbXMiLCJwb3N0IiwicHJvbWlzZSIsInB1dCIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQVllLFVBQVVBLEdBQVYsRUFBZUMsTUFBZixFQUF1QkMsUUFBdkIsRUFBaUM7O0FBRTVDRCxXQUFPRSxHQUFQLENBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDM0JELFlBQUlFLE1BQUosQ0FBVyw2QkFBWCxFQUEwQyxHQUExQztBQUNBRixZQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsZ0RBQTNDO0FBQ0EsWUFBSUgsSUFBSUksTUFBSixLQUFlLEtBQWYsSUFBd0JKLElBQUlJLE1BQUosS0FBZSxRQUEzQyxFQUFxRDtBQUNqREMsbUJBQU9DLElBQVAsQ0FBWSxFQUFDQyxTQUFTUCxJQUFJSSxNQUFKLEdBQWFKLElBQUlRLEdBQTNCLEVBQVo7QUFDSCxTQUZELE1BRU8sSUFBSVIsSUFBSUksTUFBSixLQUFlLE1BQWYsSUFBeUJKLElBQUlJLE1BQUosS0FBZSxLQUE1QyxFQUFtRDtBQUN0REMsbUJBQU9DLElBQVAsQ0FBWSxFQUFDQyxTQUFTUCxJQUFJSSxNQUFKLEdBQWFKLElBQUlRLEdBQWpCLEdBQXVCLEdBQXZCLEdBQTZCQyxLQUFLQyxTQUFMLENBQWVWLElBQUlXLElBQW5CLENBQXZDLEVBQVo7QUFDSDs7QUFFRFQ7QUFDSCxLQVZEOztBQVlBTCxXQUFPZSxHQUFQLENBQVcsWUFBWCxFQUF5QmQsU0FBU2UsT0FBVCxFQUF6QixFQUE2Q0M7QUFBQSxxQ0FBZ0IsV0FBT2QsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQzdFLGdCQUFJYyxPQUFPLE1BQU0sc0JBQUlmLElBQUlnQixNQUFKLENBQVdDLEVBQWYsQ0FBakI7QUFDQWhCLGdCQUFJaUIsSUFBSixDQUFTSCxJQUFUO0FBRUgsU0FKNEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBN0M7O0FBT0FsQixXQUFPZSxHQUFQLENBQVcsUUFBWCxFQUFxQmQsU0FBU2UsT0FBVCxFQUFyQixFQUF5QyxzQ0FBekMsRUFBa0VDO0FBQUEsc0NBQWdCLFdBQU9kLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUNsRyxnQkFBSWtCLFFBQVEsTUFBTSwwQkFBbEI7QUFDQWxCLGdCQUFJaUIsSUFBSixDQUFTQyxLQUFUO0FBRUgsU0FKaUU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbEU7O0FBT0F0QixXQUFPdUIsSUFBUCxDQUFZLFFBQVosRUFBc0Isc0NBQXRCLEVBQStDTjtBQUFBLHNDQUFnQixXQUFPZCxHQUFQLEVBQVlDLEdBQVosRUFBb0I7O0FBRS9FSSxtQkFBT0MsSUFBUCxDQUFZRyxLQUFLQyxTQUFMLENBQWVWLElBQUlXLElBQW5CLENBQVo7O0FBRUEsZ0JBQUlJLE9BQU9mLElBQUlXLElBQWY7O0FBRUFOLG1CQUFPQyxJQUFQLENBQVksRUFBQ0MsU0FBUyxVQUFVRSxLQUFLQyxTQUFMLENBQWVLLElBQWYsQ0FBcEIsRUFBWjs7QUFFQSxrQkFBTU0sVUFBVSxNQUFNLHVCQUFLTixJQUFMLENBQXRCO0FBQ0Esa0JBQU1HLE9BQU9qQixJQUFJaUIsSUFBSixDQUFTRyxPQUFULENBQWI7QUFDSCxTQVY4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEvQzs7QUFZQXhCLFdBQU95QixHQUFQLENBQVcsWUFBWCxFQUF5QixzQ0FBekIsRUFBa0RSO0FBQUEsc0NBQWdCLFdBQU9kLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUNsRixnQkFBSWMsT0FBTyxNQUFNZixJQUFJVyxJQUFyQjs7QUFFQU4sbUJBQU9DLElBQVAsQ0FBWSxFQUFDQyxTQUFTLFVBQVVFLEtBQUtDLFNBQUwsQ0FBZUssSUFBZixDQUFwQixFQUFaO0FBQ0Esa0JBQU1NLFVBQVUsTUFBTSx1QkFBS04sSUFBTCxDQUF0QjtBQUNBLGtCQUFNRyxPQUFPakIsSUFBSWlCLElBQUosQ0FBU0csT0FBVCxDQUFiO0FBQ0gsU0FOaUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbEQ7O0FBUUF6QixRQUFJRyxHQUFKLENBQVEsR0FBUixFQUFhRixNQUFiO0FBQ0gsQzs7QUE3REQ7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxNQUFNUSxTQUFTLDZCQUFmOztBQUVBLE1BQU1TLGtCQUFrQlMsTUFBTSxDQUFDdkIsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDOUNzQixZQUFRQyxPQUFSLENBQWdCRixHQUFHdkIsR0FBSCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsQ0FBaEIsRUFDS3dCLEtBREwsQ0FDV3hCLElBRFg7QUFFSCxDQUhEOztBQXNEQyIsImZpbGUiOiJUZWFtc1JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjdXN0b21Mb2dnZXIgZnJvbSAnLi4vY29uZmlnL0N1c3RvbUxvZ2dlcic7XHJcbmltcG9ydCB7Z2V0QWxsLCBzYXZlLCBnZXR9IGZyb20gJy4uL3Byb2R1Y2Vycy9UZWFtTWFuYWdlcic7XHJcblxyXG5pbXBvcnQgdHJhbnNhY3Rpb25NaWRkbGV3YXJlIGZyb20gJy4uL2NvbmZpZy9UcmFuc2FjdGlvbk1pZGRsZXdhcmUnO1xyXG5cclxuY29uc3QgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XHJcblxyXG5jb25zdCBhc3luY01pZGRsZXdhcmUgPSBmbiA9PiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIFByb21pc2UucmVzb2x2ZShmbihyZXEsIHJlcywgbmV4dCkpXHJcbiAgICAgICAgLmNhdGNoKG5leHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCwgcm91dGVyLCBrZXljbG9haykge1xyXG5cclxuICAgIHJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XHJcbiAgICAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJyB8fCByZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyh7bWVzc2FnZTogcmVxLm1ldGhvZCArIHJlcS51cmx9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJyB8fCByZXEubWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyh7bWVzc2FnZTogcmVxLm1ldGhvZCArIHJlcS51cmwgKyAnLCcgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSl9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5nZXQoJy90ZWFtcy86aWQnLCBrZXljbG9hay5wcm90ZWN0KCksIGFzeW5jTWlkZGxld2FyZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBsZXQgdGVhbSA9IGF3YWl0IGdldChyZXEucGFyYW1zLmlkKTtcclxuICAgICAgICByZXMuanNvbih0ZWFtKTtcclxuXHJcbiAgICB9KSk7XHJcblxyXG5cclxuICAgIHJvdXRlci5nZXQoJy90ZWFtcycsIGtleWNsb2FrLnByb3RlY3QoKSwgdHJhbnNhY3Rpb25NaWRkbGV3YXJlKCksIGFzeW5jTWlkZGxld2FyZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBsZXQgdGVhbXMgPSBhd2FpdCBnZXRBbGwoKTtcclxuICAgICAgICByZXMuanNvbih0ZWFtcyk7XHJcblxyXG4gICAgfSkpO1xyXG5cclxuXHJcbiAgICByb3V0ZXIucG9zdCgnL3RlYW1zJywgdHJhbnNhY3Rpb25NaWRkbGV3YXJlKCksIGFzeW5jTWlkZGxld2FyZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpKTtcclxuXHJcbiAgICAgICAgbGV0IHRlYW0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oe21lc3NhZ2U6ICd0ZWFtOicgKyBKU09OLnN0cmluZ2lmeSh0ZWFtKX0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gYXdhaXQgc2F2ZSh0ZWFtKTtcclxuICAgICAgICBjb25zdCBqc29uID0gcmVzLmpzb24ocHJvbWlzZSk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcm91dGVyLnB1dCgnL3RlYW1zLzppZCcsIHRyYW5zYWN0aW9uTWlkZGxld2FyZSgpLCBhc3luY01pZGRsZXdhcmUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlYW0gPSBhd2FpdCByZXEuYm9keTtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oe21lc3NhZ2U6ICd0ZWFtOicgKyBKU09OLnN0cmluZ2lmeSh0ZWFtKX0pO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBhd2FpdCBzYXZlKHRlYW0pO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSByZXMuanNvbihwcm9taXNlKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBhcHAudXNlKCcvJywgcm91dGVyKTtcclxufTsiXX0=