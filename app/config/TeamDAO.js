import connexion from '../dao/connexion';
import * as Sequelize from 'sequelize/lib/data-types';

const conn = connexion();
const Team = conn.define('team', {
    name: {
        type: Sequelize.STRING
    }
});

export function createTeam(name) {
    Team.sync({force: false}).then(() => {
        return Team.create({
            name: name
        });
    });
}