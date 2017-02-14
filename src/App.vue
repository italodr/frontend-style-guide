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

    .Note {
        border: solid $c-framework-primary;
        border-width: 0 0 0 4px;
        font-size: .75rem;
        font-style: italic;
        padding: .5rem 1rem;
    }

    a:not([class]) { color: $c-framework-secondary; }
}
</style>
