'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertValid = assertValid;

var _CustomLogger = require('../config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _CustomLogger2.default)();

function assertValid(obj, type) {
    const valid = type.isValid(obj, {
        noUndeclaredFields: true,
        errorHook: (childObj, childType, path) => {
            logger.info({ message: 'error when validate ' + path });
        }
    });
    return valid;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wcm9kdWNlcnMvVGVhbVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJhc3NlcnRWYWxpZCIsImxvZ2dlciIsIm9iaiIsInR5cGUiLCJ2YWxpZCIsImlzVmFsaWQiLCJub1VuZGVjbGFyZWRGaWVsZHMiLCJlcnJvckhvb2siLCJjaGlsZE9iaiIsImNoaWxkVHlwZSIsInBhdGgiLCJpbmZvIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O1FBSWdCQSxXLEdBQUFBLFc7O0FBSGhCOzs7Ozs7QUFDQSxJQUFJQyxTQUFTLDZCQUFiOztBQUVPLFNBQVNELFdBQVQsQ0FBcUJFLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQztBQUNuQyxVQUFNQyxRQUFRRCxLQUFLRSxPQUFMLENBQWFILEdBQWIsRUFBa0I7QUFDNUJJLDRCQUFvQixJQURRO0FBRTVCQyxtQkFBVyxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBc0JDLElBQXRCLEtBQStCO0FBQ3RDVCxtQkFBT1UsSUFBUCxDQUFZLEVBQUNDLFNBQVMseUJBQXlCRixJQUFuQyxFQUFaO0FBQ0g7QUFKMkIsS0FBbEIsQ0FBZDtBQU1BLFdBQU9OLEtBQVA7QUFDSCIsImZpbGUiOiJUZWFtVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IGN1c3RvbUxvZ2dlciBmcm9tICcuLi9jb25maWcvQ3VzdG9tTG9nZ2VyJztcbnZhciBsb2dnZXIgPSBjdXN0b21Mb2dnZXIoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFZhbGlkKG9iaiwgdHlwZSkge1xuICAgIGNvbnN0IHZhbGlkID0gdHlwZS5pc1ZhbGlkKG9iaiwge1xuICAgICAgICBub1VuZGVjbGFyZWRGaWVsZHM6IHRydWUsXG4gICAgICAgIGVycm9ySG9vazogKGNoaWxkT2JqLCBjaGlsZFR5cGUsIHBhdGgpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKHttZXNzYWdlOiAnZXJyb3Igd2hlbiB2YWxpZGF0ZSAnICsgcGF0aCB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWxpZDtcbn07XG4iXX0=