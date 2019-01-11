import { loadTeamType } from '../common/AvroTypeLoader';
import { assertValid } from './TeamValidator';
import customLogger from '../config/CustomLogger';
import {createTeam} from '../config/TeamDAO';
var logger = customLogger();
export function saveTeam(team) {
    const type = loadTeamType();
    const valid = assertValid(team, type);
    if(valid){
        const buffer = type.toBuffer(team);
        logger.info({message:'save team' + buffer});
        //TODO : send to postgres and kafka
        createTeam(team.name);
        return team;

    }else{
        logger.error({message:'team is not valid'});
        return {'error' : 'team is not valid'};
    }


};

