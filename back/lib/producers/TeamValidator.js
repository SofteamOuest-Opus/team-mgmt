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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wcm9kdWNlcnMvVGVhbVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJhc3NlcnRWYWxpZCIsImxvZ2dlciIsIm9iaiIsInR5cGUiLCJ2YWxpZCIsImlzVmFsaWQiLCJub1VuZGVjbGFyZWRGaWVsZHMiLCJlcnJvckhvb2siLCJjaGlsZE9iaiIsImNoaWxkVHlwZSIsInBhdGgiLCJpbmZvIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O1FBSWdCQSxXLEdBQUFBLFc7O0FBSGhCOzs7Ozs7QUFDQSxJQUFJQyxTQUFTLDZCQUFiOztBQUVPLFNBQVNELFdBQVQsQ0FBcUJFLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQztBQUNuQyxVQUFNQyxRQUFRRCxLQUFLRSxPQUFMLENBQWFILEdBQWIsRUFBa0I7QUFDNUJJLDRCQUFvQixJQURRO0FBRTVCQyxtQkFBVyxDQUFDQyxRQUFELEVBQVdDLFNBQVgsRUFBc0JDLElBQXRCLEtBQStCO0FBQ3RDVCxtQkFBT1UsSUFBUCxDQUFZLEVBQUNDLFNBQVMseUJBQXlCRixJQUFuQyxFQUFaO0FBQ0g7QUFKMkIsS0FBbEIsQ0FBZDtBQU1BLFdBQU9OLEtBQVA7QUFDSCIsImZpbGUiOiJUZWFtVmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3VzdG9tTG9nZ2VyIGZyb20gJy4uL2NvbmZpZy9DdXN0b21Mb2dnZXInO1xyXG52YXIgbG9nZ2VyID0gY3VzdG9tTG9nZ2VyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0VmFsaWQob2JqLCB0eXBlKSB7XHJcbiAgICBjb25zdCB2YWxpZCA9IHR5cGUuaXNWYWxpZChvYmosIHtcclxuICAgICAgICBub1VuZGVjbGFyZWRGaWVsZHM6IHRydWUsXHJcbiAgICAgICAgZXJyb3JIb29rOiAoY2hpbGRPYmosIGNoaWxkVHlwZSwgcGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyh7bWVzc2FnZTogJ2Vycm9yIHdoZW4gdmFsaWRhdGUgJyArIHBhdGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn07XHJcbiJdfQ==