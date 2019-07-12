import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    debug: true,
    state: {
        logged: false,
        loading: false,
        teams: []
    },
    getters: {
        isLogged(state) {
            return state.logged;
        },
        getTeams(state) {
            return state.teams;
        }
    },
    mutations: {
        login(state) {
            axios.get('/api/environment', {
                headers: [{'Access-Control-Allow-Origin': '*'}]
            }).then(response => {
                console.log(response);
                state.logged = true;
            }).catch(e => {
                console.log(e.toString());
                state.logged = false;
            })
        }, loadTeams(state) {
            axios.get('/api/teams', {
                headers: [{'Access-Control-Allow-Origin': '*'}]
            }).then(response => {
                state.teams = response.data;
            }).catch(e => {
                this.errors.push(e);
            })
        }
    },
    actions: {}
})
