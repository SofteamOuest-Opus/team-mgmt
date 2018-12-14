'use strict';

export default class TeamValidator {
    constructor(){
    }
    assertValid = (obj, type) => type.isValid(obj, {
        noUndeclaredFields: true,
        errorHook: (childObj, childType, path) => {
            throw new Error('invalid ' + path);
        }
    })
}

