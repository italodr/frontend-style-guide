<template>
    <div class="Components">
        <breakpoints></breakpoints>
        <buttons></buttons>
    </div>
</template>

<script>
import Breakpoints from '../../base/resources/Breakpoints.vue'
import Buttons from '../../base/atoms/Buttons.vue'

export default {
    name: 'Components',
    components: {
        Breakpoints,
        Buttons
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Components { width: 100%; }
</style>
