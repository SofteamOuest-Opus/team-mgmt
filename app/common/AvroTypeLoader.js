'use strict';

import fs from 'fs';
import * as avro from 'avsc';

export default class AvroTypeLoader{
    constructor(){
    }
    loadTeamType(){
        var teamString = fs.readFileSync("./lib/spec/team.avro");
        const teamType = JSON.parse(teamString);
        const type = avro.Type.forSchema(teamType);
        return type;
    }
}
