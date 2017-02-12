<template>
    <div id="app">
        <sidebar></sidebar>
        <mainContent></mainContent>
    </div>
</template>

<script>
import Sidebar from './framework/organisms/Sidebar'
import MainContent from './framework/organisms/MainContent'

export default {
    name: 'app',
    components: {
        Sidebar,
        MainContent
    }
}
</script>

<style lang="scss">
@import './assets/scss/app';
@import './assets/scss/base/globals';
@import './assets/scss/utils/utilities';
@import './assets/scss/vendors/prism';

#app {
    color: #2c3e50;
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
