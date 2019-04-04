'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTeam = createTeam;
exports.getTeam = getTeam;
exports.getAllTeam = getAllTeam;

var _connexion = require('../config/connexion');

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
    Team.sync({ force: true });
    Team.create(team);
}
function getTeam(id) {
    return Team.findByPk(id);
}
function getAllTeam() {
    return Team.findAll();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tb2RlbHMvVGVhbS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUZWFtIiwiZ2V0VGVhbSIsImdldEFsbFRlYW0iLCJTZXF1ZWxpemUiLCJUZWFtIiwiY29ubmV4aW9uIiwiZGVmaW5lIiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwibmFtZSIsIlNUUklORyIsInRlYW0iLCJzeW5jIiwiZm9yY2UiLCJjcmVhdGUiLCJmaW5kQnlQayIsImZpbmRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxVLEdBQUFBLFU7UUFJQUMsTyxHQUFBQSxPO1FBR0FDLFUsR0FBQUEsVTs7QUFwQmhCOzs7O0FBQ0E7O0lBQVlDLFM7Ozs7OztBQUVaLE1BQU1DLE9BQU9DLG9CQUFVQyxNQUFWLENBQWlCLE1BQWpCLEVBQXlCO0FBQ2xDQyxRQUFJO0FBQ0FDLGNBQU1MLFVBQVVNLE9BRGhCO0FBRUFDLG9CQUFZLElBRlo7QUFHQUMsdUJBQWU7QUFIZixLQUQ4QjtBQU1sQ0MsVUFBTTtBQUNGSixjQUFNTCxVQUFVVTtBQURkO0FBTjRCLENBQXpCLENBQWI7QUFVTyxTQUFTYixVQUFULENBQW9CYyxJQUFwQixFQUEwQjtBQUM3QlYsU0FBS1csSUFBTCxDQUFVLEVBQUNDLE9BQU8sSUFBUixFQUFWO0FBQ0FaLFNBQUthLE1BQUwsQ0FBWUgsSUFBWjtBQUNIO0FBQ00sU0FBU2IsT0FBVCxDQUFpQk0sRUFBakIsRUFBcUI7QUFDeEIsV0FBT0gsS0FBS2MsUUFBTCxDQUFjWCxFQUFkLENBQVA7QUFDSDtBQUNNLFNBQVNMLFVBQVQsR0FBc0I7QUFDekIsV0FBT0UsS0FBS2UsT0FBTCxFQUFQO0FBQ0giLCJmaWxlIjoiVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZXhpb24gZnJvbSAnLi4vY29uZmlnL2Nvbm5leGlvbic7XHJcbmltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUvbGliL2RhdGEtdHlwZXMnO1xyXG5cclxuY29uc3QgVGVhbSA9IGNvbm5leGlvbi5kZWZpbmUoJ3RlYW0nLCB7XHJcbiAgICBpZDoge1xyXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSLFxyXG4gICAgICAgIHByaW1hcnlLZXk6IHRydWUsXHJcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVhbSh0ZWFtKSB7XHJcbiAgICBUZWFtLnN5bmMoe2ZvcmNlOiB0cnVlfSk7XHJcbiAgICBUZWFtLmNyZWF0ZSh0ZWFtKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVhbShpZCkge1xyXG4gICAgcmV0dXJuIFRlYW0uZmluZEJ5UGsoaWQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUZWFtKCkge1xyXG4gICAgcmV0dXJuIFRlYW0uZmluZEFsbCgpO1xyXG59Il19