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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wcm9kdWNlcnMvVGVhbU1hbmFnZXIuanMiXSwibmFtZXMiOlsic2F2ZSIsImdldCIsImdldEFsbCIsImxvZ2dlciIsInRlYW0iLCJ2YWxpZCIsIm5hbWUiLCJlcnJvciIsIm1lc3NhZ2UiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEksR0FBQUEsSTtRQXdCQUMsRyxHQUFBQSxHO1FBSUFDLE0sR0FBQUEsTTs7QUFyQ2hCOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQUlDLFNBQVMsNkJBQWI7O0FBR08sU0FBU0gsSUFBVCxDQUFjSSxJQUFkLEVBQW9CO0FBQ3ZCOztBQUVBLFFBQUlDLFFBQVEsSUFBWjtBQUNBLFFBQUksQ0FBQ0QsS0FBS0UsSUFBVixFQUFnQjtBQUNaRCxnQkFBUSxLQUFSO0FBQ0g7QUFDRCxRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSRixlQUFPSSxLQUFQLENBQWEsRUFBQ0MsU0FBUyxtQkFBVixFQUFiO0FBQ0EsZUFBTyxFQUFDLFNBQVMsbUJBQVYsRUFBUDtBQUNILEtBSEQsTUFHTztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlDQUFXSixJQUFYO0FBQ0EsZUFBT0EsSUFBUDtBQUVIOztBQUVEO0FBQ0o7QUFDQzs7QUFHTSxTQUFTSCxHQUFULENBQWFRLEVBQWIsRUFBaUI7QUFDcEIsV0FBTyxzQkFBUUEsRUFBUixDQUFQO0FBQ0g7O0FBRU0sU0FBU1AsTUFBVCxHQUFrQjtBQUNyQixXQUFPLDBCQUFQO0FBQ0giLCJmaWxlIjoiVGVhbU1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRUZWFtVHlwZX0gZnJvbSAnLi4vY29tbW9uL0F2cm9UeXBlTG9hZGVyJztcbmltcG9ydCB7YXNzZXJ0VmFsaWR9IGZyb20gJy4vVGVhbVZhbGlkYXRvcic7XG5pbXBvcnQgY3VzdG9tTG9nZ2VyIGZyb20gJy4uL2NvbmZpZy9DdXN0b21Mb2dnZXInO1xuaW1wb3J0IGNvbm5leGlvbiBmcm9tICcuLi9jb25maWcvY29ubmV4aW9uJztcbmltcG9ydCB7Y3JlYXRlVGVhbSwgZ2V0QWxsVGVhbSwgZ2V0VGVhbX0gZnJvbSAnLi4vbW9kZWxzL1RlYW1EQU8nO1xuXG52YXIgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUodGVhbSkge1xuICAgIC8vY29ubmV4aW9uLnRyYW5zYWN0aW9uKHQgPT4ge1xuXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoIXRlYW0ubmFtZSkge1xuICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcih7bWVzc2FnZTogJ3RlYW0gaXMgbm90IHZhbGlkJ30pO1xuICAgICAgICByZXR1cm4geydlcnJvcic6ICd0ZWFtIGlzIG5vdCB2YWxpZCd9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY29uc3QgYnVmZmVyID0gdHlwZS50b0J1ZmZlcih0ZWFtKTtcbiAgICAgICAgLy9sb2dnZXIuaW5mbyh7bWVzc2FnZTonc2F2ZSB0ZWFtJyArIGJ1ZmZlcn0pO1xuICAgICAgICAvL1RPRE8gOiBzZW5kICBrYWZrYVxuICAgICAgICBjcmVhdGVUZWFtKHRlYW0pO1xuICAgICAgICByZXR1cm4gdGVhbTtcblxuICAgIH1cblxuICAgIC8vIH0pXG4vL1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIGdldFRlYW0oaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIHJldHVybiBnZXRBbGxUZWFtKCk7XG59XG5cbiJdfQ==