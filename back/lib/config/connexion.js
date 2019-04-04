'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _continuationLocalStorage = require('continuation-local-storage');

var cls = _interopRequireWildcard(_continuationLocalStorage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sequelize.Sequelize.useCLS(cls.createNamespace('db'));
const namespace = cls.createNamespace('my-namespace');
_sequelize2.default.cls = namespace;
const conn = new _sequelize.Sequelize('postgres://team_api:team_api@localhost:5432/team_api');
exports.default = conn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvY29ubmV4aW9uLmpzIl0sIm5hbWVzIjpbImNscyIsIlNlcXVlbGl6ZSIsInVzZUNMUyIsImNyZWF0ZU5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInNlcXVlbGl6ZSIsImNvbm4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7OztBQUdaQyxxQkFBVUMsTUFBVixDQUFrQkYsSUFBSUcsZUFBSixDQUFvQixJQUFwQixDQUFsQjtBQUNBLE1BQU1DLFlBQVlKLElBQUlHLGVBQUosQ0FBb0IsY0FBcEIsQ0FBbEI7QUFDQUUsb0JBQVVMLEdBQVYsR0FBZ0JJLFNBQWhCO0FBQ0EsTUFBTUUsT0FBTyxJQUFJTCxvQkFBSixDQUFjLHNEQUFkLENBQWI7a0JBQ2VLLEkiLCJmaWxlIjoiY29ubmV4aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXF1ZWxpemV9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgKiBhcyBjbHMgZnJvbSAnY29udGludWF0aW9uLWxvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5TZXF1ZWxpemUudXNlQ0xTKCBjbHMuY3JlYXRlTmFtZXNwYWNlKCdkYicpKTtcbmNvbnN0IG5hbWVzcGFjZSA9IGNscy5jcmVhdGVOYW1lc3BhY2UoJ215LW5hbWVzcGFjZScpO1xuc2VxdWVsaXplLmNscyA9IG5hbWVzcGFjZTtcbmNvbnN0IGNvbm4gPSBuZXcgU2VxdWVsaXplKCdwb3N0Z3JlczovL3RlYW1fYXBpOnRlYW1fYXBpQGxvY2FsaG9zdDo1NDMyL3RlYW1fYXBpJyk7XG5leHBvcnQgZGVmYXVsdCBjb25uO1xuIl19