<template>
    <div class="Components">
        <buttons></buttons>
    </div>
</template>

<script>
import Buttons from '../molecules/Buttons'

export default {
    name: 'Components',
    components: {
        Buttons
    },
    data () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Components { width: 100%; }
</style>
