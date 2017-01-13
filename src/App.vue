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

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}

.Block {
    margin: 0 0 30px;

    &-title {
        font-size: 28px;
        margin: 0 0 10px;
    }

    &-description {
        font-size: 16px;
        margin: 0 0 20px;
    }

    &-samples {
        border: solid #f1f1f1;
        border-radius: 4px 4px 0 0;
        border-width: 1px 1px 0 1px;
        padding: 50px;
    }

    &-code {
        background: #f1f1f1;
        border-radius: 0 0 4px 4px;
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 14px;
        padding: 20px 50px;
    }

    &-code {
        li {
            line-height: 1.5;
            margin: 0 0 5px;
        }
    }
}
</style>
