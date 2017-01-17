<template>
    <div class="Components">
        <buttons></buttons>
        <search></search>
    </div>
</template>

<script>
import Buttons from '../molecules/Buttons'
import Search from '../molecules/Search'

export default {
    name: 'Components',
    components: {
        Buttons,
        Search
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Components { width: 100%; }
</style>
