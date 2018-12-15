'use strict';

export default class TeamProducer {
    constructor(){
    }
    sendTeam(team, type) {
        const buffer = type.toBuffer(team);
        return type.fromBuffer(buffer);
    }
}