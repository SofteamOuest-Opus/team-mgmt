<template>
    <div>
        <md-content>
            <md-list class="md-active md-elevation-3">
                <md-list-item v-for="team in teams">
                    <span class="md-list-item-text">{{team.name}}</span>
                    <md-button class="md-icon-button md-list-action">
                        <md-icon class="md-primary">edit</md-icon>
                    </md-button>
                </md-list-item>
            </md-list>
        </md-content>
        <md-content>
            <md-list class="md-active md-elevation-3">
                <md-list-item v-for="error in errors">
                    <span class="md-list-item-text">{{error}}</span>
                </md-list-item>
            </md-list>
        </md-content>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {MdList, MdContent, MdButton, MdIcon} from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import axios from 'axios';

    Vue.use(MdList);
    Vue.use(MdContent);
    Vue.use(MdButton);
    Vue.use(MdIcon);
    export default {
        name: 'TeamList',
        data() {
            return {
                teams: [],
                errors: []
            }
        },
        created() {
            axios.get('/api/teams', {
                headers: [{'Access-Control-Allow-Origin' : '*'}]
            }).then(response => {
                this.teams = response.data
            })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }


</script>
<style lang="scss">
    .md-content {
        z-index: 1;
        padding: 40px;
        width: 100%;
        max-width: 100%;
        position: relative;
    }

    .md-list {
        max-width: 100%;
        min-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }
</style>