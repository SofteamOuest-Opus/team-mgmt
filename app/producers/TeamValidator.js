'use strict';
import customLogger from '../config/customLogger';

export default class TeamValidator {
    constructor(){
        const customLogger = customLogger();
    }
    assertValid = (obj, type) => type.isValid(obj, {

        noUndeclaredFields: true,
        errorHook: (childObj, childType, path) => {
            customLogger.error({message: path})

            throw new Error('invalid ' + path);
        }
    })
}

