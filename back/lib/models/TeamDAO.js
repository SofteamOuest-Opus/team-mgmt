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
    Team.create(team);
}

function getTeam(id) {
    return Team.findByPk(id);
}

function getAllTeam() {
    return Team.findAll();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tb2RlbHMvVGVhbURBTy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUZWFtIiwiZ2V0VGVhbSIsImdldEFsbFRlYW0iLCJTZXF1ZWxpemUiLCJUZWFtIiwiY29ubmV4aW9uIiwiZGVmaW5lIiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwibmFtZSIsIlNUUklORyIsInRlYW0iLCJjcmVhdGUiLCJmaW5kQnlQayIsImZpbmRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JnQkEsVSxHQUFBQSxVO1FBSUFDLE8sR0FBQUEsTztRQUlBQyxVLEdBQUFBLFU7O0FBeEJoQjs7OztBQUNBOztJQUFZQyxTOzs7Ozs7QUFHWixNQUFNQyxPQUFPQyxvQkFBVUMsTUFBVixDQUFpQixNQUFqQixFQUF5QjtBQUNsQ0MsUUFBSTtBQUNBQyxjQUFNTCxVQUFVTSxPQURoQjtBQUVBQyxvQkFBWSxJQUZaO0FBR0FDLHVCQUFlO0FBSGYsS0FEOEI7QUFNbENDLFVBQU07QUFDRkosY0FBTUwsVUFBVVU7QUFEZDtBQU40QixDQUF6QixDQUFiOztBQVlPLFNBQVNiLFVBQVQsQ0FBb0JjLElBQXBCLEVBQTBCO0FBQzdCVixTQUFLVyxNQUFMLENBQVlELElBQVo7QUFDSDs7QUFFTSxTQUFTYixPQUFULENBQWlCTSxFQUFqQixFQUFxQjtBQUN4QixXQUFPSCxLQUFLWSxRQUFMLENBQWNULEVBQWQsQ0FBUDtBQUNIOztBQUVNLFNBQVNMLFVBQVQsR0FBc0I7QUFDekIsV0FBT0UsS0FBS2EsT0FBTCxFQUFQO0FBQ0giLCJmaWxlIjoiVGVhbURBTy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZXhpb24gZnJvbSAnLi4vY29uZmlnL2Nvbm5leGlvbic7XHJcbmltcG9ydCAqIGFzIFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUvbGliL2RhdGEtdHlwZXMnO1xyXG5cclxuXHJcbmNvbnN0IFRlYW0gPSBjb25uZXhpb24uZGVmaW5lKCd0ZWFtJywge1xyXG4gICAgaWQ6IHtcclxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUixcclxuICAgICAgICBwcmltYXJ5S2V5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVhbSh0ZWFtKSB7XHJcbiAgICBUZWFtLmNyZWF0ZSh0ZWFtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW0oaWQpIHtcclxuICAgIHJldHVybiBUZWFtLmZpbmRCeVBrKGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRlYW0oKSB7XHJcbiAgICByZXR1cm4gVGVhbS5maW5kQWxsKCk7XHJcbn1cclxuXHJcblxyXG4iXX0=