import {Sequelize} from 'sequelize';
import * as cls from 'continuation-local-storage';
export default () => {
    Sequelize.useCLS( cls.createNamespace('db'));
    return new Sequelize('postgres://team_api:team_api@localhost:5432/team_api');
}