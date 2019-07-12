'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app, router, keycloak) {

    router.use((req, res, next) => {
        if (req.method === 'GET' || req.method === 'DELETE') {
            logger.info({ message: req.method + req.url });
        } else if (req.method === 'POST' || req.method === 'PUT') {
            logger.info({ message: req.method + req.url + ',' + JSON.stringify(req.body) });
        }
        next();
    });

    router.get('/environment', keycloak.protect(), asyncMiddleware((() => {
        var _ref = _asyncToGenerator(function* (req, res) {
            let env = yield {
                status: 'connected'
            };
            res.json(env);
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })()));

    app.use('/', router);
};

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const logger = (0, _CustomLogger2.default)();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMvTG9naW5Sb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwicm91dGVyIiwia2V5Y2xvYWsiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwibWV0aG9kIiwibG9nZ2VyIiwiaW5mbyIsIm1lc3NhZ2UiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsImdldCIsInByb3RlY3QiLCJhc3luY01pZGRsZXdhcmUiLCJlbnYiLCJzdGF0dXMiLCJqc29uIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBUWUsVUFBVUEsR0FBVixFQUFlQyxNQUFmLEVBQXVCQyxRQUF2QixFQUFpQzs7QUFFNUNELFdBQU9FLEdBQVAsQ0FBVyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUMzQixZQUFJRixJQUFJRyxNQUFKLEtBQWUsS0FBZixJQUF3QkgsSUFBSUcsTUFBSixLQUFlLFFBQTNDLEVBQXFEO0FBQ2pEQyxtQkFBT0MsSUFBUCxDQUFZLEVBQUNDLFNBQVNOLElBQUlHLE1BQUosR0FBYUgsSUFBSU8sR0FBM0IsRUFBWjtBQUNILFNBRkQsTUFFTyxJQUFJUCxJQUFJRyxNQUFKLEtBQWUsTUFBZixJQUF5QkgsSUFBSUcsTUFBSixLQUFlLEtBQTVDLEVBQW1EO0FBQ3REQyxtQkFBT0MsSUFBUCxDQUFZLEVBQUNDLFNBQVNOLElBQUlHLE1BQUosR0FBYUgsSUFBSU8sR0FBakIsR0FBdUIsR0FBdkIsR0FBNkJDLEtBQUtDLFNBQUwsQ0FBZVQsSUFBSVUsSUFBbkIsQ0FBdkMsRUFBWjtBQUNIO0FBQ0RSO0FBQ0gsS0FQRDs7QUFTQUwsV0FBT2MsR0FBUCxDQUFXLGNBQVgsRUFBMkJiLFNBQVNjLE9BQVQsRUFBM0IsRUFBK0NDO0FBQUEscUNBQWdCLFdBQU9iLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUMvRSxnQkFBSWEsTUFBTSxNQUFNO0FBQ2RDLHdCQUFRO0FBRE0sYUFBaEI7QUFHQWQsZ0JBQUllLElBQUosQ0FBU0YsR0FBVDtBQUNILFNBTDhDOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQS9DOztBQVFBbEIsUUFBSUcsR0FBSixDQUFRLEdBQVIsRUFBYUYsTUFBYjtBQUNILEM7O0FBNUJEOzs7Ozs7OztBQUNBLE1BQU1PLFNBQVMsNkJBQWY7O0FBRUEsTUFBTVMsa0JBQWtCSSxNQUFNLENBQUNqQixHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQjtBQUM5Q2dCLFlBQVFDLE9BQVIsQ0FBZ0JGLEdBQUdqQixHQUFILEVBQVFDLEdBQVIsRUFBYUMsSUFBYixDQUFoQixFQUNLa0IsS0FETCxDQUNXbEIsSUFEWDtBQUVILENBSEQ7O0FBeUJDIiwiZmlsZSI6IkxvZ2luUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN1c3RvbUxvZ2dlciBmcm9tICcuLi9jb25maWcvQ3VzdG9tTG9nZ2VyJztcclxuY29uc3QgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XHJcblxyXG5jb25zdCBhc3luY01pZGRsZXdhcmUgPSBmbiA9PiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIFByb21pc2UucmVzb2x2ZShmbihyZXEsIHJlcywgbmV4dCkpXHJcbiAgICAgICAgLmNhdGNoKG5leHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCwgcm91dGVyLCBrZXljbG9haykge1xyXG5cclxuICAgIHJvdXRlci51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnIHx8IHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiByZXEubWV0aG9kICsgcmVxLnVybH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnIHx8IHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiByZXEubWV0aG9kICsgcmVxLnVybCArICcsJyArIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByb3V0ZXIuZ2V0KCcvZW52aXJvbm1lbnQnLCBrZXljbG9hay5wcm90ZWN0KCksIGFzeW5jTWlkZGxld2FyZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBsZXQgZW52ID0gYXdhaXQge1xyXG4gICAgICAgICAgc3RhdHVzIDonY29ubmVjdGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzLmpzb24oZW52KTtcclxuICAgIH0pKTtcclxuXHJcblxyXG4gICAgYXBwLnVzZSgnLycsIHJvdXRlcik7XHJcbn07Il19