import connexion from '../config/connexion';
import * as Sequelize from 'sequelize/lib/data-types';

class TeamDAO {
    constructor() {
        this.Team = connexion.define('team', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            }
        });
    }

    createTeam(team) {
        this.Team.create(team);
    }

    getTeam(id) {
        return this.Team.findByPk(id);
    }

    getAllTeam() {
        return this.Team.findAll();
    }
}

export default TeamDAO;