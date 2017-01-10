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
    data () {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Components {
    padding: 20px;
    width: 100%;
}
</style>
