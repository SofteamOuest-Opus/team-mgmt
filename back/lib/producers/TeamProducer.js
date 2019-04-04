'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveTeam = saveTeam;

var _AvroTypeLoader = require('../common/AvroTypeLoader');

var _TeamValidator = require('./TeamValidator');

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _CustomLogger2.default)();
function saveTeam(team) {
    const type = (0, _AvroTypeLoader.loadTeamType)();
    const valid = (0, _TeamValidator.assertValid)(team, type);
    if (valid) {
        const buffer = type.toBuffer(team);
        logger.info({ message: 'save team' + buffer });
        //TODO : send to postgres and kafka
        return team;
    } else {
        logger.error({ message: 'team is not valid' });
        return { 'error': 'team is not valid' };
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wcm9kdWNlcnMvVGVhbVByb2R1Y2VyLmpzIl0sIm5hbWVzIjpbInNhdmVUZWFtIiwibG9nZ2VyIiwidGVhbSIsInR5cGUiLCJ2YWxpZCIsImJ1ZmZlciIsInRvQnVmZmVyIiwiaW5mbyIsIm1lc3NhZ2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFJZ0JBLFEsR0FBQUEsUTs7QUFKaEI7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNBLElBQUlDLFNBQVMsNkJBQWI7QUFDTyxTQUFTRCxRQUFULENBQWtCRSxJQUFsQixFQUF3QjtBQUMzQixVQUFNQyxPQUFPLG1DQUFiO0FBQ0EsVUFBTUMsUUFBUSxnQ0FBWUYsSUFBWixFQUFrQkMsSUFBbEIsQ0FBZDtBQUNBLFFBQUdDLEtBQUgsRUFBUztBQUNMLGNBQU1DLFNBQVNGLEtBQUtHLFFBQUwsQ0FBY0osSUFBZCxDQUFmO0FBQ0FELGVBQU9NLElBQVAsQ0FBWSxFQUFDQyxTQUFRLGNBQWNILE1BQXZCLEVBQVo7QUFDQTtBQUNBLGVBQU9ILElBQVA7QUFFSCxLQU5ELE1BTUs7QUFDREQsZUFBT1EsS0FBUCxDQUFhLEVBQUNELFNBQVEsbUJBQVQsRUFBYjtBQUNBLGVBQU8sRUFBQyxTQUFVLG1CQUFYLEVBQVA7QUFDSDtBQUdKIiwiZmlsZSI6IlRlYW1Qcm9kdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRUZWFtVHlwZSB9IGZyb20gJy4uL2NvbW1vbi9BdnJvVHlwZUxvYWRlcic7XHJcbmltcG9ydCB7IGFzc2VydFZhbGlkIH0gZnJvbSAnLi9UZWFtVmFsaWRhdG9yJztcclxuaW1wb3J0IGN1c3RvbUxvZ2dlciBmcm9tICcuLi9jb25maWcvQ3VzdG9tTG9nZ2VyJztcclxudmFyIGxvZ2dlciA9IGN1c3RvbUxvZ2dlcigpO1xyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRlYW0odGVhbSkge1xyXG4gICAgY29uc3QgdHlwZSA9IGxvYWRUZWFtVHlwZSgpO1xyXG4gICAgY29uc3QgdmFsaWQgPSBhc3NlcnRWYWxpZCh0ZWFtLCB0eXBlKTtcclxuICAgIGlmKHZhbGlkKXtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSB0eXBlLnRvQnVmZmVyKHRlYW0pO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOidzYXZlIHRlYW0nICsgYnVmZmVyfSk7XHJcbiAgICAgICAgLy9UT0RPIDogc2VuZCB0byBwb3N0Z3JlcyBhbmQga2Fma2FcclxuICAgICAgICByZXR1cm4gdGVhbTtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2dnZXIuZXJyb3Ioe21lc3NhZ2U6J3RlYW0gaXMgbm90IHZhbGlkJ30pO1xyXG4gICAgICAgIHJldHVybiB7J2Vycm9yJyA6ICd0ZWFtIGlzIG5vdCB2YWxpZCd9O1xyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcblxyXG4iXX0=