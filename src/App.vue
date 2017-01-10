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

<style>
* {
    box-sizing: border-box;
}
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
}
#app {
    color: #2c3e50;
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
