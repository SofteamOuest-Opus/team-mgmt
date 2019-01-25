import {loadTeamType} from '../common/AvroTypeLoader';
import {assertValid} from './TeamValidator';
import customLogger from '../config/CustomLogger';
import {createTeam, getAllTeam, getTeam} from '../models/Team';
import connexion from '../config/connexion';

var logger = customLogger();

export async function save(team) {

    // connexion.transaction(t => {
        //const type = loadTeamType();
        //const valid = assertValid(team, type);
        var valid = true;
        if (!team.name) {
            valid = false;
        }
        if (valid) {
            //const buffer = type.toBuffer(team);
            //logger.info({message:'save team' + buffer});
            //TODO : send  kafka
            createTeam(team);
            return team;

        } else {
            logger.error({message: 'team is not valid'});
            return {'error': 'team is not valid'};
        }

    // })
//
};


export async function get(id) {
    return getTeam(id);
}

export async function getAll() {
    return getAllTeam();
}
