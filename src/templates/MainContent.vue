<template>
    <div class="MainContent">
        <h1>{{ title }}</h1>
        <components></components>
        <custom></custom>
    </div>
</template>

<script>
import Components from '../pages/Components'
import Custom from '../custom/Custom'

export default {
    name: 'MainContent',
    components: {
        Components,
        Custom
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
    @import '../assets/scss/templates/maincontent';
</style>
