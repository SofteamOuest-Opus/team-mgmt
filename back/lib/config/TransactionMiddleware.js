'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connexion = require('./connexion');

var _connexion2 = _interopRequireDefault(_connexion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//création d'une nouvelle transaction
exports.default = () => (req, res, next) => _connexion2.default.transaction(_asyncToGenerator(function* () {
  return next();
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvVHJhbnNhY3Rpb25NaWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm5leHQiLCJjb25uZXhpb24iLCJ0cmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBQ0E7a0JBQ2UsTUFBTSxDQUFDQSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxLQUFvQkMsb0JBQVVDLFdBQVYsbUJBQXNCO0FBQUEsU0FBWUYsTUFBWjtBQUFBLENBQXRCLEUiLCJmaWxlIjoiVHJhbnNhY3Rpb25NaWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5leGlvbiBmcm9tICcuL2Nvbm5leGlvbidcclxuLy9jcsOpYXRpb24gZCd1bmUgbm91dmVsbGUgdHJhbnNhY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHJlcSwgcmVzLCBuZXh0KSA9PiBjb25uZXhpb24udHJhbnNhY3Rpb24oYXN5bmMgKCkgPT4gbmV4dCgpKTsiXX0=