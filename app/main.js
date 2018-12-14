import express from 'express';
import TeamProducer from './teams/TeamProducer';
import TeamValidator from './teams/TeamValidator';
import AvroTypeLoader from './common/AvroTypeLoader';
import bodyParser from 'body-parser';

const app = express();
const teamProducer = new TeamProducer();
const teamValidator = new TeamValidator();
const avroTypeLoader = new AvroTypeLoader();

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/teams', (req, res, next) => {
    const team = {id: 'La TEAM', members: []};
    return res.json(team);
});

app.post('/teams', (req, res, next) => {
    let team = req.body;
    console.log(team);
    //const team = {id: 'La TEAM', members: []};
    const type = avroTypeLoader.loadTeamType();
    const assertValid = teamValidator.assertValid(team, type);
    return res.json(teamProducer.sendTeam(team, type));
});