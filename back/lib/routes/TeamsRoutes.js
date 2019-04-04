'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app, router, keycloak) {

    router.use((req, res, next) => {
        //${info.timestamp}-${info.level}-${info.logger}-${info.code}-${info.correlationId}-${info.message}-${info.stackTrace}
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({ message: req.method + req.url });
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({ message: req.method + req.url + ',' + JSON.stringify(req.body) });
        }

        next();
    });

    router.get('/teams/:id', keycloak.protect(), (() => {
        var _ref = _asyncToGenerator(function* (req, res, next) {
            let team = yield (0, _TeamManager.get)(req.params.id);
            res.json(team);
            next();
        });

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    })(), (() => {
        var _ref2 = _asyncToGenerator(function* (req, res, next) {
            next();
        });

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    })());

    router.get('/teams', keycloak.protect(), (() => {
        var _ref3 = _asyncToGenerator(function* (req, res, next) {
            let teams = yield (0, _TeamManager.getAll)();
            res.json(teams);
            next();
        });

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    })(), (() => {
        var _ref4 = _asyncToGenerator(function* (req, res, next) {
            next();
        });

        return function (_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    })());

    router.put('/teams/:id', (() => {
        var _ref5 = _asyncToGenerator(function* (req, res, next) {
            let team = yield req.body;

            logger.info({ message: 'team:' + JSON.stringify(team) });
            const promise = yield (0, _TeamManager.save)(team);
            const json = res.json(promise);
            next();
        });

        return function (_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    })(), (() => {
        var _ref6 = _asyncToGenerator(function* (req, res, next) {
            next();
        });

        return function (_x16, _x17, _x18) {
            return _ref6.apply(this, arguments);
        };
    })());
    app.use('/', router);
};

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

var _TeamManager = require('../producers/TeamManager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const logger = (0, _CustomLogger2.default)();

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMvVGVhbXNSb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwicm91dGVyIiwia2V5Y2xvYWsiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwibWV0aG9kIiwibG9nZ2VyIiwiaW5mbyIsIm1lc3NhZ2UiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsImdldCIsInByb3RlY3QiLCJ0ZWFtIiwicGFyYW1zIiwiaWQiLCJqc29uIiwidGVhbXMiLCJwdXQiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBS2UsVUFBVUEsR0FBVixFQUFlQyxNQUFmLEVBQXVCQyxRQUF2QixFQUFpQzs7QUFHNUNELFdBQU9FLEdBQVAsQ0FBVyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUMzQjtBQUNBLFlBQUlGLElBQUlHLE1BQUosS0FBZSxLQUFmLElBQXdCSCxJQUFJRyxNQUFKLEtBQWUsUUFBM0MsRUFBcUQ7QUFDakRDLG1CQUFPQyxJQUFQLENBQVksRUFBQ0MsU0FBU04sSUFBSUcsTUFBSixHQUFhSCxJQUFJTyxHQUEzQixFQUFaO0FBQ0gsU0FGRCxNQUVPLElBQUlQLElBQUlHLE1BQUosS0FBZSxNQUFmLElBQXlCSCxJQUFJRyxNQUFKLEtBQWUsS0FBNUMsRUFBbUQ7QUFDdERDLG1CQUFPQyxJQUFQLENBQVksRUFBQ0MsU0FBU04sSUFBSUcsTUFBSixHQUFhSCxJQUFJTyxHQUFqQixHQUF1QixHQUF2QixHQUE2QkMsS0FBS0MsU0FBTCxDQUFlVCxJQUFJVSxJQUFuQixDQUF2QyxFQUFaO0FBQ0g7O0FBRURSO0FBQ0gsS0FURDs7QUFXQUwsV0FBT2MsR0FBUCxDQUFXLFlBQVgsRUFBeUJiLFNBQVNjLE9BQVQsRUFBekI7QUFBQSxxQ0FBNkMsV0FBT1osR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUEwQjtBQUNuRSxnQkFBSVcsT0FBTyxNQUFNLHNCQUFJYixJQUFJYyxNQUFKLENBQVdDLEVBQWYsQ0FBakI7QUFDQWQsZ0JBQUllLElBQUosQ0FBU0gsSUFBVDtBQUNBWDtBQUNILFNBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FJRyxXQUFPRixHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQTBCO0FBQ3pCQTtBQUNILFNBTkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0FMLFdBQU9jLEdBQVAsQ0FBVyxRQUFYLEVBQXFCYixTQUFTYyxPQUFULEVBQXJCO0FBQUEsc0NBQXlDLFdBQU9aLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBMEI7QUFDL0QsZ0JBQUllLFFBQVEsTUFBTSwwQkFBbEI7QUFDQWhCLGdCQUFJZSxJQUFKLENBQVNDLEtBQVQ7QUFDQWY7QUFDSCxTQUpEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSUcsV0FBT0YsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUEwQjtBQUN6QkE7QUFDSCxTQU5EOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBTCxXQUFPcUIsR0FBUCxDQUFXLFlBQVg7QUFBQSxzQ0FBeUIsV0FBT2xCLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBMEI7QUFDL0MsZ0JBQUlXLE9BQU8sTUFBTWIsSUFBSVUsSUFBckI7O0FBRUFOLG1CQUFPQyxJQUFQLENBQVksRUFBQ0MsU0FBUyxVQUFVRSxLQUFLQyxTQUFMLENBQWVJLElBQWYsQ0FBcEIsRUFBWjtBQUNBLGtCQUFNTSxVQUFVLE1BQU0sdUJBQUtOLElBQUwsQ0FBdEI7QUFDQSxrQkFBTUcsT0FBT2YsSUFBSWUsSUFBSixDQUFTRyxPQUFULENBQWI7QUFDQWpCO0FBQ0gsU0FQRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQU9HLFdBQU9GLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBMEI7QUFDekJBO0FBQ0gsU0FURDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBTixRQUFJRyxHQUFKLENBQVEsR0FBUixFQUFhRixNQUFiO0FBRUgsQzs7QUFqREQ7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTU8sU0FBUyw2QkFBZjs7QUE4Q0MiLCJmaWxlIjoiVGVhbXNSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3VzdG9tTG9nZ2VyIGZyb20gJy4uL2NvbmZpZy9DdXN0b21Mb2dnZXInO1xyXG5pbXBvcnQge2dldEFsbCwgc2F2ZSwgZ2V0fSBmcm9tICcuLi9wcm9kdWNlcnMvVGVhbU1hbmFnZXInO1xyXG5cclxuY29uc3QgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwLCByb3V0ZXIsIGtleWNsb2FrKSB7XHJcblxyXG5cclxuICAgIHJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgLy8ke2luZm8udGltZXN0YW1wfS0ke2luZm8ubGV2ZWx9LSR7aW5mby5sb2dnZXJ9LSR7aW5mby5jb2RlfS0ke2luZm8uY29ycmVsYXRpb25JZH0tJHtpbmZvLm1lc3NhZ2V9LSR7aW5mby5zdGFja1RyYWNlfVxyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJyB8fCByZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyh7bWVzc2FnZTogcmVxLm1ldGhvZCArIHJlcS51cmx9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJyB8fCByZXEubWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyh7bWVzc2FnZTogcmVxLm1ldGhvZCArIHJlcS51cmwgKyAnLCcgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSl9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5nZXQoJy90ZWFtcy86aWQnLCBrZXljbG9hay5wcm90ZWN0KCksIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZWFtID0gYXdhaXQgZ2V0KHJlcS5wYXJhbXMuaWQpO1xyXG4gICAgICAgIHJlcy5qc29uKHRlYW0pO1xyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH0sIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByb3V0ZXIuZ2V0KCcvdGVhbXMnLCBrZXljbG9hay5wcm90ZWN0KCksIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZWFtcyA9IGF3YWl0IGdldEFsbCgpO1xyXG4gICAgICAgIHJlcy5qc29uKHRlYW1zKTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9LCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcm91dGVyLnB1dCgnL3RlYW1zLzppZCcsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZWFtID0gYXdhaXQgcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiAndGVhbTonICsgSlNPTi5zdHJpbmdpZnkodGVhbSl9KTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gYXdhaXQgc2F2ZSh0ZWFtKTtcclxuICAgICAgICBjb25zdCBqc29uID0gcmVzLmpzb24ocHJvbWlzZSk7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfSwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgICBhcHAudXNlKCcvJywgcm91dGVyKTtcclxuXHJcbn07Il19