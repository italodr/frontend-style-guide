<template>
    <div id="app">
        <sidebar></sidebar>
        <mainContent></mainContent>
    </div>
</template>

<script>
import Sidebar from './templates/Sidebar'
import MainContent from './templates/MainContent'

export default {
    name: 'app',
    components: {
        Sidebar,
        MainContent
    }
}
</script>

<style lang="scss">
    @import 'assets/scss/templates/app';
</style>
