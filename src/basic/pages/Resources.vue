<template>
    <div>
        <dependencies></dependencies>
        <breakpoints></breakpoints>
        <grids></grids>
    </div>
</template>

<script>
import Dependencies from '../resources/Dependencies'
import Breakpoints from '../resources/Breakpoints'
import Grids from '../resources/Grids'

import '../../assets/scss/atoms/_definition_lists.scss'

export default {
    components: {
        Dependencies,
        Breakpoints,
        Grids
    }
}
</script>
