<template>
    <div>
        <md-list>
            <md-list-item v-for="item in items">
                {{item.name}}
            </md-list-item>
        </md-list>
    </div>
</template>
<script>
    export default {
        name: 'TeamList',
        data() {
            return {
                items: [{name: 'Team un'}]
            }
        }
    }
</script>
<style>

</style>