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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb25maWcvQ3VzdG9tTG9nZ2VyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjcmVhdGVMb2dnZXIiLCJmb3JtYXQiLCJ0cmFuc3BvcnRzIiwiY29tYmluZSIsInRpbWVzdGFtcCIsImxhYmVsIiwicHJpbnRmIiwibXlGb3JtYXQiLCJpbmZvIiwibG9nZ2VyU3RyIiwibG9nZ2VyIiwiY29kZVN0ciIsImNvZGUiLCJjb3JyZWxhdGlvbklkU3RyIiwiY29ycmVsYXRpb25JZCIsIm1lc3NhZ2VJZFN0ciIsIm1lc3NhZ2UiLCJzdGFja1RyYWNlSWRTdHIiLCJzdGFja1RyYWNlIiwibGV2ZWwiLCJDb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFBMkNBLFFBQVEsU0FBUixDOztNQUFwQ0MsWSxZQUFBQSxZO01BQWNDLE0sWUFBQUEsTTtNQUFRQyxVLFlBQUFBLFU7TUFDdEJDLE8sR0FBcUNGLE0sQ0FBckNFLE87TUFBU0MsUyxHQUE0QkgsTSxDQUE1QkcsUztNQUFXQyxLLEdBQWlCSixNLENBQWpCSSxLO01BQU9DLE0sR0FBVUwsTSxDQUFWSyxNOztrQkFFbkIsTUFBTTtBQUNqQjtBQUNBLFVBQU1DLFdBQVdELE9BQU9FLFFBQVE7QUFDNUIsY0FBTUMsWUFBWUQsS0FBS0UsTUFBTCxHQUFjRixLQUFLRSxNQUFuQixHQUE0QixFQUE5QztBQUNBLGNBQU1DLFVBQVVILEtBQUtJLElBQUwsR0FBWUosS0FBS0ksSUFBakIsR0FBd0IsRUFBeEM7QUFDQSxjQUFNQyxtQkFBbUJMLEtBQUtNLGFBQUwsR0FBcUJOLEtBQUtNLGFBQTFCLEdBQTBDLEVBQW5FO0FBQ0EsY0FBTUMsZUFBZVAsS0FBS1EsT0FBTCxHQUFlUixLQUFLUSxPQUFwQixHQUE4QixFQUFuRDtBQUNBLGNBQU1DLGtCQUFrQlQsS0FBS1UsVUFBTCxHQUFrQlYsS0FBS1UsVUFBdkIsR0FBb0MsRUFBNUQ7QUFDQSxlQUFRLEdBQUVWLEtBQUtKLFNBQVUsSUFBR0ksS0FBS1csS0FBTSxJQUFHVixTQUFVLElBQUdFLE9BQVEsSUFBR0UsZ0JBQWlCLElBQUdFLFlBQWEsSUFBR0UsZUFBZ0IsRUFBdEg7QUFDSCxLQVBnQixDQUFqQjs7QUFTQTtBQUNBLFVBQU1QLFNBQVNWLGFBQWE7QUFDeEJDLGdCQUFRRSxRQUFRQyxXQUFSLEVBQXFCRyxRQUFyQixDQURnQjtBQUV4Qkwsb0JBQVksQ0FBQyxJQUFJQSxXQUFXa0IsT0FBZixFQUFEO0FBRlksS0FBYixDQUFmOztBQUtBLFdBQU9WLE1BQVA7QUFDSCxDIiwiZmlsZSI6IkN1c3RvbUxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjcmVhdGVMb2dnZXIsIGZvcm1hdCwgdHJhbnNwb3J0c30gPSByZXF1aXJlKCd3aW5zdG9uJyk7XHJcbmNvbnN0IHtjb21iaW5lLCB0aW1lc3RhbXAsIGxhYmVsLCBwcmludGZ9ID0gZm9ybWF0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgLy9jcsOpYXRpb24gZHUgZm9ybWF0IGRlIGxvZ1xyXG4gICAgY29uc3QgbXlGb3JtYXQgPSBwcmludGYoaW5mbyA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9nZ2VyU3RyID0gaW5mby5sb2dnZXIgPyBpbmZvLmxvZ2dlciA6ICcnO1xyXG4gICAgICAgIGNvbnN0IGNvZGVTdHIgPSBpbmZvLmNvZGUgPyBpbmZvLmNvZGUgOiAnJztcclxuICAgICAgICBjb25zdCBjb3JyZWxhdGlvbklkU3RyID0gaW5mby5jb3JyZWxhdGlvbklkID8gaW5mby5jb3JyZWxhdGlvbklkIDogJyc7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkU3RyID0gaW5mby5tZXNzYWdlID8gaW5mby5tZXNzYWdlIDogJyc7XHJcbiAgICAgICAgY29uc3Qgc3RhY2tUcmFjZUlkU3RyID0gaW5mby5zdGFja1RyYWNlID8gaW5mby5zdGFja1RyYWNlIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIGAke2luZm8udGltZXN0YW1wfS0ke2luZm8ubGV2ZWx9LSR7bG9nZ2VyU3RyfS0ke2NvZGVTdHJ9LSR7Y29ycmVsYXRpb25JZFN0cn0tJHttZXNzYWdlSWRTdHJ9LSR7c3RhY2tUcmFjZUlkU3RyfWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2Nyw6lhdGlvbiBkdSBsb2dnZXIgc3VyIGxhIGNvbnNvbGVcclxuICAgIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XHJcbiAgICAgICAgZm9ybWF0OiBjb21iaW5lKHRpbWVzdGFtcCgpLCBteUZvcm1hdCksXHJcbiAgICAgICAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoKV1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsb2dnZXI7XHJcbn0iXX0=