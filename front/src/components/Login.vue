<template>
    <div>
        <md-button v-if="!isLogged" v-on:click="logon()" class="md-primary md-round">Login</md-button>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {MdButton, MdIcon} from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import store from '../store';
    import axios from 'axios';

    Vue.use(MdButton);
    Vue.use(MdIcon);
    export default {
        name: 'Login',
        data() {
            return {
                errors: []
            }
        },
        computed: {
            isLogged() {
                return this.$store.getters.isLogged;
            },
            logon() {
                window.location.href = "http://localhost:9080/auth/realms/test/protocol/openid-connect/auth?client_id=team-mgmt&state=06f4248e-a47d-45f7-9f74-5f0a5ec1ba68&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fteams%3Fauth_callback%3D1&scope=openid&response_type=code";
            }
        }
    }
</script>
<style lang="scss">
</style>