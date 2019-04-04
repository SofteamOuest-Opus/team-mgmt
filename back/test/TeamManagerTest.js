import * as sinon from 'sinon';
import {get, getAll, save} from '../app/producers/TeamManager';
import * as teamDAO from '../app/models/TeamDAO';
import {expect} from 'chai';

var assert = sinon.assert;

describe('test team manager', _ => {
    let teamManager;
    let getTeam;
    let createTeam;
    let getAllTeam;

    before(() => {
            createTeam = sinon.stub(teamDAO, 'createTeam');
            getTeam = sinon.stub(teamDAO, 'getTeam');
            getTeam.returns({name: 'e', members: []});
            getAllTeam = sinon.stub(teamDAO, 'getAllTeam');
            getAllTeam.returns([{name: 'e', members: []}]);

        }
    )

    after(() => {
        teamDAO.createTeam.restore();
        teamDAO.getTeam.restore();
        teamDAO.getAllTeam.restore();
    })

    it('save team', async () => {
        const team = {name: 'e', members: []};
        let res = await save(team);
        sinon.assert.callCount(createTeam,1);
    })

    // it('save team invalid', async () => {
    //
    //     const team = {members: []};
    //     let res = await save(team);
    //     sinon.assert.callCount(createTeam,0);
    // })

    it('get team by id', async () => {
        let res = await get(1);
        expect(res).to.eql({name: 'e', members: []})
    })

    it('get all teams', async () => {
        let res = await getAll();
        expect(res).to.have.lengthOf(1);
    })
})