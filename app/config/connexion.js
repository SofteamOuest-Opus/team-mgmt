import {Sequelize} from 'sequelize';
import * as cls from 'continuation-local-storage';
import sequelize from 'sequelize';

Sequelize.useCLS( cls.createNamespace('db'));
const namespace = cls.createNamespace('my-namespace');
sequelize.cls = namespace;
const conn = new Sequelize('postgres://team_api:team_api@localhost:5432/team_api');
export default conn;
