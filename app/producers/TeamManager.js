import {loadTeamType} from '../common/AvroTypeLoader';
import {assertValid} from './TeamValidator';
import customLogger from '../config/CustomLogger';
import connexion from '../config/connexion';
import TeamDAO from '../models/TeamDAO';

var logger = customLogger();

export default class TeamManager {

    constructor() {
       this.teamDAO = new TeamDAO();
    }

    save = function (team) {
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
            this.teamDAO.createTeam(team);
            return team;

        } else {
            logger.error({message: 'team is not valid'});
            return {'error': 'team is not valid'};
        }

        // })
//
    };


    get = function (id) {
        return this.teamDAO.getTeam(id);
    }

    getAll = function () {
        return this.teamDAO.getAllTeam();
    }

}