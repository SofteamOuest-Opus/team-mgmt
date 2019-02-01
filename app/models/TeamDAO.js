import connexion from '../config/connexion';
import * as Sequelize from 'sequelize/lib/data-types';


const Team = connexion.define('team', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
});


export function createTeam(team) {
    Team.create(team);
}

export function getTeam(id) {
    return Team.findByPk(id);
}

export function getAllTeam() {
    return Team.findAll();
}


