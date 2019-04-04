'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTeam = createTeam;
exports.getTeam = getTeam;
exports.getAllTeam = getAllTeam;

var _connexion = require('./connexion');

var _connexion2 = _interopRequireDefault(_connexion);

var _dataTypes = require('sequelize/lib/data-types');

var Sequelize = _interopRequireWildcard(_dataTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Team = _connexion2.default.define('team', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
});
function createTeam(team) {
    return Team.create(team);
}
function getTeam(id) {
    return Team.findByPk(id);
}
function getAllTeam() {
    return Team.findAll();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9kYW8vVGVhbURBTy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUZWFtIiwiZ2V0VGVhbSIsImdldEFsbFRlYW0iLCJTZXF1ZWxpemUiLCJUZWFtIiwiY29ubmV4aW9uIiwiZGVmaW5lIiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwibmFtZSIsIlNUUklORyIsInRlYW0iLCJjcmVhdGUiLCJmaW5kQnlQayIsImZpbmRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxVLEdBQUFBLFU7UUFHQUMsTyxHQUFBQSxPO1FBR0FDLFUsR0FBQUEsVTs7QUFuQmhCOzs7O0FBQ0E7O0lBQVlDLFM7Ozs7OztBQUVaLE1BQU1DLE9BQU9DLG9CQUFVQyxNQUFWLENBQWlCLE1BQWpCLEVBQXlCO0FBQ2xDQyxRQUFJO0FBQ0FDLGNBQU1MLFVBQVVNLE9BRGhCO0FBRUFDLG9CQUFZLElBRlo7QUFHQUMsdUJBQWU7QUFIZixLQUQ4QjtBQU1sQ0MsVUFBTTtBQUNGSixjQUFNTCxVQUFVVTtBQURkO0FBTjRCLENBQXpCLENBQWI7QUFVTyxTQUFTYixVQUFULENBQW9CYyxJQUFwQixFQUEwQjtBQUM3QixXQUFPVixLQUFLVyxNQUFMLENBQVlELElBQVosQ0FBUDtBQUNIO0FBQ00sU0FBU2IsT0FBVCxDQUFpQk0sRUFBakIsRUFBcUI7QUFDeEIsV0FBT0gsS0FBS1ksUUFBTCxDQUFjVCxFQUFkLENBQVA7QUFDSDtBQUNNLFNBQVNMLFVBQVQsR0FBc0I7QUFDekIsV0FBT0UsS0FBS2EsT0FBTCxFQUFQO0FBQ0giLCJmaWxlIjoiVGVhbURBTy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZXhpb24gZnJvbSAnLi9jb25uZXhpb24nO1xyXG5pbXBvcnQgKiBhcyBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplL2xpYi9kYXRhLXR5cGVzJztcclxuXHJcbmNvbnN0IFRlYW0gPSBjb25uZXhpb24uZGVmaW5lKCd0ZWFtJywge1xyXG4gICAgaWQ6IHtcclxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUixcclxuICAgICAgICBwcmltYXJ5S2V5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlYW0odGVhbSkge1xyXG4gICAgcmV0dXJuIFRlYW0uY3JlYXRlKHRlYW0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtKGlkKSB7XHJcbiAgICByZXR1cm4gVGVhbS5maW5kQnlQayhpZCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRlYW0oKSB7XHJcbiAgICByZXR1cm4gVGVhbS5maW5kQWxsKCk7XHJcbn0iXX0=