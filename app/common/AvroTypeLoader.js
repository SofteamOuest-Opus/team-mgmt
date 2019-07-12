import fs from 'fs';
import * as avro from 'avsc';

export function loadTeamType() {
    const teamString = fs.readFileSync('./lib/spec/team.avro');
    const teamType = JSON.parse(teamString);
    const type = avro.Type.forSchema(teamType);
    return type;
}