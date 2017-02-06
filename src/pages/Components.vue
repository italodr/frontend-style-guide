<template>
    <div class="Components">
        <breakpoints></breakpoints>
        <buttons></buttons>
        <search></search>
        <formularies></formularies>
    </div>
</template>

<script>
import Breakpoints from '../molecules/Breakpoints'
import Buttons from '../molecules/Buttons'
import Search from '../molecules/Search'
import Formularies from '../molecules/Formularies'

export default {
    name: 'Components',
    components: {
        Breakpoints,
        Buttons,
        Search,
        Formularies
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Components { width: 100%; }
</style>
