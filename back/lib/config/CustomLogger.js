'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('winston');

const createLogger = _require.createLogger,
      format = _require.format,
      transports = _require.transports;
const combine = format.combine,
      timestamp = format.timestamp,
      label = format.label,
      printf = format.printf;

exports.default = () => {
    //création du format de log
    const myFormat = printf(info => {
        const loggerStr = info.logger ? info.logger : '';
        const codeStr = info.code ? info.code : '';
        const correlationIdStr = info.correlationId ? info.correlationId : '';
        const messageIdStr = info.message ? info.message : '';
        const stackTraceIdStr = info.stackTrace ? info.stackTrace : '';
        return `${info.timestamp}-${info.level}-${loggerStr}-${codeStr}-${correlationIdStr}-${messageIdStr}-${stackTraceIdStr}`;
    });

    //création du logger sur la console
    const logger = createLogger({
        format: combine(timestamp(), myFormat),
        transports: [new transports.Console()]
    });

    return logger;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvQ3VzdG9tTG9nZ2VyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjcmVhdGVMb2dnZXIiLCJmb3JtYXQiLCJ0cmFuc3BvcnRzIiwiY29tYmluZSIsInRpbWVzdGFtcCIsImxhYmVsIiwicHJpbnRmIiwibXlGb3JtYXQiLCJpbmZvIiwibG9nZ2VyU3RyIiwibG9nZ2VyIiwiY29kZVN0ciIsImNvZGUiLCJjb3JyZWxhdGlvbklkU3RyIiwiY29ycmVsYXRpb25JZCIsIm1lc3NhZ2VJZFN0ciIsIm1lc3NhZ2UiLCJzdGFja1RyYWNlSWRTdHIiLCJzdGFja1RyYWNlIiwibGV2ZWwiLCJDb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFBMkNBLFFBQVEsU0FBUixDOztNQUFwQ0MsWSxZQUFBQSxZO01BQWNDLE0sWUFBQUEsTTtNQUFRQyxVLFlBQUFBLFU7TUFDdEJDLE8sR0FBcUNGLE0sQ0FBckNFLE87TUFBU0MsUyxHQUE0QkgsTSxDQUE1QkcsUztNQUFXQyxLLEdBQWlCSixNLENBQWpCSSxLO01BQU9DLE0sR0FBVUwsTSxDQUFWSyxNOztrQkFFbkIsTUFBTTtBQUNqQjtBQUNBLFVBQU1DLFdBQVdELE9BQU9FLFFBQVE7QUFDNUIsY0FBTUMsWUFBWUQsS0FBS0UsTUFBTCxHQUFjRixLQUFLRSxNQUFuQixHQUE0QixFQUE5QztBQUNBLGNBQU1DLFVBQVVILEtBQUtJLElBQUwsR0FBWUosS0FBS0ksSUFBakIsR0FBd0IsRUFBeEM7QUFDQSxjQUFNQyxtQkFBbUJMLEtBQUtNLGFBQUwsR0FBcUJOLEtBQUtNLGFBQTFCLEdBQTBDLEVBQW5FO0FBQ0EsY0FBTUMsZUFBZVAsS0FBS1EsT0FBTCxHQUFlUixLQUFLUSxPQUFwQixHQUE4QixFQUFuRDtBQUNBLGNBQU1DLGtCQUFrQlQsS0FBS1UsVUFBTCxHQUFrQlYsS0FBS1UsVUFBdkIsR0FBb0MsRUFBNUQ7QUFDQSxlQUFRLEdBQUVWLEtBQUtKLFNBQVUsSUFBR0ksS0FBS1csS0FBTSxJQUFHVixTQUFVLElBQUdFLE9BQVEsSUFBR0UsZ0JBQWlCLElBQUdFLFlBQWEsSUFBR0UsZUFBZ0IsRUFBdEg7QUFDSCxLQVBnQixDQUFqQjs7QUFTQTtBQUNBLFVBQU1QLFNBQVNWLGFBQWE7QUFDeEJDLGdCQUFRRSxRQUFRQyxXQUFSLEVBQXFCRyxRQUFyQixDQURnQjtBQUV4Qkwsb0JBQVksQ0FBQyxJQUFJQSxXQUFXa0IsT0FBZixFQUFEO0FBRlksS0FBYixDQUFmOztBQUtBLFdBQU9WLE1BQVA7QUFDSCxDIiwiZmlsZSI6IkN1c3RvbUxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0c30gPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCB7Y29tYmluZSwgdGltZXN0YW1wLCBsYWJlbCwgcHJpbnRmfSA9IGZvcm1hdDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIC8vY3LDqWF0aW9uIGR1IGZvcm1hdCBkZSBsb2dcbiAgICBjb25zdCBteUZvcm1hdCA9IHByaW50ZihpbmZvID0+IHtcbiAgICAgICAgY29uc3QgbG9nZ2VyU3RyID0gaW5mby5sb2dnZXIgPyBpbmZvLmxvZ2dlciA6ICcnO1xuICAgICAgICBjb25zdCBjb2RlU3RyID0gaW5mby5jb2RlID8gaW5mby5jb2RlIDogJyc7XG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWRTdHIgPSBpbmZvLmNvcnJlbGF0aW9uSWQgPyBpbmZvLmNvcnJlbGF0aW9uSWQgOiAnJztcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkU3RyID0gaW5mby5tZXNzYWdlID8gaW5mby5tZXNzYWdlIDogJyc7XG4gICAgICAgIGNvbnN0IHN0YWNrVHJhY2VJZFN0ciA9IGluZm8uc3RhY2tUcmFjZSA/IGluZm8uc3RhY2tUcmFjZSA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7aW5mby50aW1lc3RhbXB9LSR7aW5mby5sZXZlbH0tJHtsb2dnZXJTdHJ9LSR7Y29kZVN0cn0tJHtjb3JyZWxhdGlvbklkU3RyfS0ke21lc3NhZ2VJZFN0cn0tJHtzdGFja1RyYWNlSWRTdHJ9YDtcbiAgICB9KTtcblxuICAgIC8vY3LDqWF0aW9uIGR1IGxvZ2dlciBzdXIgbGEgY29uc29sZVxuICAgIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XG4gICAgICAgIGZvcm1hdDogY29tYmluZSh0aW1lc3RhbXAoKSwgbXlGb3JtYXQpLFxuICAgICAgICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSgpXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxvZ2dlcjtcbn0iXX0=