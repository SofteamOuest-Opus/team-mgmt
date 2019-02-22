'use strict';
import customLogger from '../config/CustomLogger';
var logger = customLogger();

export function assertValid(obj, type) {
    const valid = type.isValid(obj, {
        noUndeclaredFields: true,
        errorHook: (childObj, childType, path) => {
            logger.info({message: 'error when validate ' + path });
        }
    });
    return valid;
};
