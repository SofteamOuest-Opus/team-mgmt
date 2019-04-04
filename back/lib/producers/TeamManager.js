'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.save = save;
exports.get = get;
exports.getAll = getAll;

var _AvroTypeLoader = require('../common/AvroTypeLoader');

var _TeamValidator = require('./TeamValidator');

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

var _connexion = require('../config/connexion');

var _connexion2 = _interopRequireDefault(_connexion);

var _TeamDAO = require('../models/TeamDAO');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _CustomLogger2.default)();

function save(team) {
    //connexion.transaction(t => {

    var valid = true;
    if (!team.name) {
        valid = false;
    }
    if (!valid) {
        logger.error({ message: 'team is not valid' });
        return { 'error': 'team is not valid' };
    } else {
        //const buffer = type.toBuffer(team);
        //logger.info({message:'save team' + buffer});
        //TODO : send  kafka
        (0, _TeamDAO.createTeam)(team);
        return team;
    }

    // })
    //
};

function get(id) {
    return (0, _TeamDAO.getTeam)(id);
}

function getAll() {
    return (0, _TeamDAO.getAllTeam)();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wcm9kdWNlcnMvVGVhbU1hbmFnZXIuanMiXSwibmFtZXMiOlsic2F2ZSIsImdldCIsImdldEFsbCIsImxvZ2dlciIsInRlYW0iLCJ2YWxpZCIsIm5hbWUiLCJlcnJvciIsIm1lc3NhZ2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEksR0FBQUEsSTtRQXdCQUMsRyxHQUFBQSxHO1FBSUFDLE0sR0FBQUEsTTs7QUFyQ2hCOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQUlDLFNBQVMsNkJBQWI7O0FBR08sU0FBU0gsSUFBVCxDQUFjSSxJQUFkLEVBQW9CO0FBQ3ZCOztBQUVBLFFBQUlDLFFBQVEsSUFBWjtBQUNBLFFBQUksQ0FBQ0QsS0FBS0UsSUFBVixFQUFnQjtBQUNaRCxnQkFBUSxLQUFSO0FBQ0g7QUFDRCxRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSRixlQUFPSSxLQUFQLENBQWEsRUFBQ0MsU0FBUyxtQkFBVixFQUFiO0FBQ0EsZUFBTyxFQUFDLFNBQVMsbUJBQVYsRUFBUDtBQUNILEtBSEQsTUFHTztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDQUFXSixJQUFYO0FBQ0EsZUFBT0EsSUFBUDtBQUVIOztBQUVEO0FBQ0o7QUFDQzs7QUFHTSxTQUFTSCxHQUFULENBQWFRLEVBQWIsRUFBaUI7QUFDcEIsV0FBTyxzQkFBUUEsRUFBUixDQUFQO0FBQ0g7O0FBRU0sU0FBU1AsTUFBVCxHQUFrQjtBQUNyQixXQUFPLDBCQUFQO0FBQ0giLCJmaWxlIjoiVGVhbU1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRUZWFtVHlwZX0gZnJvbSAnLi4vY29tbW9uL0F2cm9UeXBlTG9hZGVyJztcclxuaW1wb3J0IHthc3NlcnRWYWxpZH0gZnJvbSAnLi9UZWFtVmFsaWRhdG9yJztcclxuaW1wb3J0IGN1c3RvbUxvZ2dlciBmcm9tICcuLi9jb25maWcvQ3VzdG9tTG9nZ2VyJztcclxuaW1wb3J0IGNvbm5leGlvbiBmcm9tICcuLi9jb25maWcvY29ubmV4aW9uJztcclxuaW1wb3J0IHtjcmVhdGVUZWFtLCBnZXRBbGxUZWFtLCBnZXRUZWFtfSBmcm9tICcuLi9tb2RlbHMvVGVhbURBTyc7XHJcblxyXG52YXIgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUodGVhbSkge1xyXG4gICAgLy9jb25uZXhpb24udHJhbnNhY3Rpb24odCA9PiB7XHJcblxyXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgIGlmICghdGVhbS5uYW1lKSB7XHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICBsb2dnZXIuZXJyb3Ioe21lc3NhZ2U6ICd0ZWFtIGlzIG5vdCB2YWxpZCd9KTtcclxuICAgICAgICByZXR1cm4geydlcnJvcic6ICd0ZWFtIGlzIG5vdCB2YWxpZCd9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL2NvbnN0IGJ1ZmZlciA9IHR5cGUudG9CdWZmZXIodGVhbSk7XHJcbiAgICAgICAgLy9sb2dnZXIuaW5mbyh7bWVzc2FnZTonc2F2ZSB0ZWFtJyArIGJ1ZmZlcn0pO1xyXG4gICAgICAgIC8vVE9ETyA6IHNlbmQgIGthZmthXHJcbiAgICAgICAgY3JlYXRlVGVhbSh0ZWFtKTtcclxuICAgICAgICByZXR1cm4gdGVhbTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gfSlcclxuLy9cclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGlkKSB7XHJcbiAgICByZXR1cm4gZ2V0VGVhbShpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgICByZXR1cm4gZ2V0QWxsVGVhbSgpO1xyXG59XHJcblxyXG4iXX0=