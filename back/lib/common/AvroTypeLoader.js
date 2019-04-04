'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadTeamType = loadTeamType;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _avsc = require('avsc');

var avro = _interopRequireWildcard(_avsc);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadTeamType() {
    const teamString = _fs2.default.readFileSync('./lib/spec/team.avro');
    const teamType = JSON.parse(teamString);
    const type = avro.Type.forSchema(teamType);
    return type;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vQXZyb1R5cGVMb2FkZXIuanMiXSwibmFtZXMiOlsibG9hZFRlYW1UeXBlIiwiYXZybyIsInRlYW1TdHJpbmciLCJmcyIsInJlYWRGaWxlU3luYyIsInRlYW1UeXBlIiwiSlNPTiIsInBhcnNlIiwidHlwZSIsIlR5cGUiLCJmb3JTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxZLEdBQUFBLFk7O0FBSGhCOzs7O0FBQ0E7O0lBQVlDLEk7Ozs7OztBQUVMLFNBQVNELFlBQVQsR0FBd0I7QUFDM0IsVUFBTUUsYUFBYUMsYUFBR0MsWUFBSCxDQUFnQixzQkFBaEIsQ0FBbkI7QUFDQSxVQUFNQyxXQUFXQyxLQUFLQyxLQUFMLENBQVdMLFVBQVgsQ0FBakI7QUFDQSxVQUFNTSxPQUFPUCxLQUFLUSxJQUFMLENBQVVDLFNBQVYsQ0FBb0JMLFFBQXBCLENBQWI7QUFDQSxXQUFPRyxJQUFQO0FBQ0giLCJmaWxlIjoiQXZyb1R5cGVMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgYXZybyBmcm9tICdhdnNjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUZWFtVHlwZSgpIHtcbiAgICBjb25zdCB0ZWFtU3RyaW5nID0gZnMucmVhZEZpbGVTeW5jKCcuL2xpYi9zcGVjL3RlYW0uYXZybycpO1xuICAgIGNvbnN0IHRlYW1UeXBlID0gSlNPTi5wYXJzZSh0ZWFtU3RyaW5nKTtcbiAgICBjb25zdCB0eXBlID0gYXZyby5UeXBlLmZvclNjaGVtYSh0ZWFtVHlwZSk7XG4gICAgcmV0dXJuIHR5cGU7XG59Il19