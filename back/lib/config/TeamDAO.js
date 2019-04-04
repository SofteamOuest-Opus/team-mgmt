'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTeam = createTeam;

var _connexion = require('../dao/connexion');

var _connexion2 = _interopRequireDefault(_connexion);

var _dataTypes = require('sequelize/lib/data-types');

var Sequelize = _interopRequireWildcard(_dataTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const conn = (0, _connexion2.default)();
const Team = conn.define('team', {
    name: {
        type: Sequelize.STRING
    }
});

function createTeam(name) {
    Team.sync({ force: false }).then(() => {
        return Team.create({
            name: name
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvVGVhbURBTy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUZWFtIiwiU2VxdWVsaXplIiwiY29ubiIsIlRlYW0iLCJkZWZpbmUiLCJuYW1lIiwidHlwZSIsIlNUUklORyIsInN5bmMiLCJmb3JjZSIsInRoZW4iLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxVLEdBQUFBLFU7O0FBVmhCOzs7O0FBQ0E7O0lBQVlDLFM7Ozs7OztBQUVaLE1BQU1DLE9BQU8sMEJBQWI7QUFDQSxNQUFNQyxPQUFPRCxLQUFLRSxNQUFMLENBQVksTUFBWixFQUFvQjtBQUM3QkMsVUFBTTtBQUNGQyxjQUFNTCxVQUFVTTtBQURkO0FBRHVCLENBQXBCLENBQWI7O0FBTU8sU0FBU1AsVUFBVCxDQUFvQkssSUFBcEIsRUFBMEI7QUFDN0JGLFNBQUtLLElBQUwsQ0FBVSxFQUFDQyxPQUFPLEtBQVIsRUFBVixFQUEwQkMsSUFBMUIsQ0FBK0IsTUFBTTtBQUNqQyxlQUFPUCxLQUFLUSxNQUFMLENBQVk7QUFDZk4sa0JBQU1BO0FBRFMsU0FBWixDQUFQO0FBR0gsS0FKRDtBQUtIIiwiZmlsZSI6IlRlYW1EQU8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmV4aW9uIGZyb20gJy4uL2Rhby9jb25uZXhpb24nO1xyXG5pbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplL2xpYi9kYXRhLXR5cGVzJztcclxuXHJcbmNvbnN0IGNvbm4gPSBjb25uZXhpb24oKTtcclxuY29uc3QgVGVhbSA9IGNvbm4uZGVmaW5lKCd0ZWFtJywge1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVhbShuYW1lKSB7XHJcbiAgICBUZWFtLnN5bmMoe2ZvcmNlOiBmYWxzZX0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBUZWFtLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19