<template>
    <div class="MainContent">
        <h1>{{ title }}</h1>
        <components></components>
        <project></project>
    </div>
</template>

<script>
import Components from '../pages/Components'
import Project from '../project/Project'

export default {
    name: 'MainContent',
    components: {
        Components,
        Project
    },
    data () {
        return {
            title: 'Frontend Style Guide'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.MainContent {
    height: 100vh;
    overflow: auto;
    padding: 20px 50px;
    width: 80%;
}
</style>
