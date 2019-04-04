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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvY29ubmV4aW9uLmpzIl0sIm5hbWVzIjpbImNscyIsIlNlcXVlbGl6ZSIsInVzZUNMUyIsImNyZWF0ZU5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInNlcXVlbGl6ZSIsImNvbm4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7OztBQUdaQyxxQkFBVUMsTUFBVixDQUFrQkYsSUFBSUcsZUFBSixDQUFvQixJQUFwQixDQUFsQjtBQUNBLE1BQU1DLFlBQVlKLElBQUlHLGVBQUosQ0FBb0IsY0FBcEIsQ0FBbEI7QUFDQUUsb0JBQVVMLEdBQVYsR0FBZ0JJLFNBQWhCO0FBQ0EsTUFBTUUsT0FBTyxJQUFJTCxvQkFBSixDQUFjLHNEQUFkLENBQWI7a0JBQ2VLLEkiLCJmaWxlIjoiY29ubmV4aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXF1ZWxpemV9IGZyb20gJ3NlcXVlbGl6ZSc7XHJcbmltcG9ydCAqIGFzIGNscyBmcm9tICdjb250aW51YXRpb24tbG9jYWwtc3RvcmFnZSc7XHJcbmltcG9ydCBzZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxuXHJcblNlcXVlbGl6ZS51c2VDTFMoIGNscy5jcmVhdGVOYW1lc3BhY2UoJ2RiJykpO1xyXG5jb25zdCBuYW1lc3BhY2UgPSBjbHMuY3JlYXRlTmFtZXNwYWNlKCdteS1uYW1lc3BhY2UnKTtcclxuc2VxdWVsaXplLmNscyA9IG5hbWVzcGFjZTtcclxuY29uc3QgY29ubiA9IG5ldyBTZXF1ZWxpemUoJ3Bvc3RncmVzOi8vdGVhbV9hcGk6dGVhbV9hcGlAbG9jYWxob3N0OjU0MzIvdGVhbV9hcGknKTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubjtcclxuIl19