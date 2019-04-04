<template>
    <div>
        <a href="/api/environment">login</a>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {MdButton, MdIcon} from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'

    Vue.use(MdButton);
    Vue.use(MdIcon);
    export default {
        name: 'Login',
        data() {
            return {}
        }
    }
</script>
<style lang="scss">
</style>