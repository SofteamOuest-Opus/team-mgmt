<template>
    <div class="app">
<!--        <login></login>-->
        <team-list>
        </team-list>
    </div>
</template>

<script>
    import TeamList from './views/TeamList.vue'
    import Login from './components/Login.vue'

    export default {
        components: {TeamList, Login}
    }
</script>

