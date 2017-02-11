<template>
    <div class="Basic">
        <colors></colors>
        <breakpoints></breakpoints>
        <breadcrumbs></breadcrumbs>
        <buttons></buttons>
        <forms></forms>
        <tables></tables>
    </div>
</template>

<script>
import Breakpoints from './resources/Breakpoints.vue'

import Colors from './atoms/Colors.vue'
import Buttons from './atoms/Buttons.vue'
import Tables from './atoms/Tables.vue'

import Breadcrumbs from './molecules/Breadcrumbs.vue'

import Forms from './organisms/Forms.vue'

export default {
    name: 'Basic',
    components: {
        Colors,
        Breakpoints,
        Buttons,
        Breadcrumbs,
        Forms,
        Tables
    }
}
</script>
