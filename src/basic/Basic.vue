<template>
    <div class="Basic">
        <dependencies></dependencies>
        <breakpoints></breakpoints>
        <grids></grids>
        <headings></headings>
        <colors></colors>
        <breadcrumbs></breadcrumbs>
        <blockquotes></blockquotes>
        <buttons></buttons>
        <links></links>
        <tables></tables>
        <definitionLists></definitionLists>
        <orderedLists></orderedLists>
        <unorderedLists></unorderedLists>
        <formLabels></formLabels>
        <formInputs></formInputs>
        <formCheckboxes></formCheckboxes>
        <formRadios></formRadios>
        <formDropdowns></formDropdowns>
        <formTextareas></formTextareas>
        <forms></forms>
    </div>
</template>

<script>
import Dependencies from './resources/Dependencies.vue'
import Breakpoints from './resources/Breakpoints.vue'
import Grids from './resources/Grids.vue'

import Colors from './atoms/Colors.vue'
import Headings from './atoms/Headings.vue'
import Buttons from './atoms/Buttons.vue'
import Tables from './atoms/Tables.vue'
import DefinitionLists from './atoms/DefinitionLists.vue'
import OrderedLists from './atoms/OrderedLists.vue'
import UnorderedLists from './atoms/UnorderedLists.vue'
import FormLabels from './atoms/FormLabels.vue'
import FormInputs from './atoms/FormInputs.vue'
import FormCheckboxes from './atoms/FormCheckboxes.vue'
import FormRadios from './atoms/FormRadios.vue'
import FormDropdowns from './atoms/FormDropdowns.vue'
import FormTextareas from './atoms/FormTextareas.vue'
import Links from './atoms/Links.vue'

import Breadcrumbs from './molecules/Breadcrumbs.vue'
import Blockquotes from './molecules/Blockquotes.vue'

import Forms from './organisms/Forms.vue'

export default {
    name: 'Basic',
    components: {
        Dependencies,
        Breakpoints,
        Grids,
        Colors,
        Headings,
        Buttons,
        Breadcrumbs,
        Forms,
        Tables,
        DefinitionLists,
        OrderedLists,
        UnorderedLists,
        FormLabels,
        FormInputs,
        FormCheckboxes,
        FormRadios,
        FormDropdowns,
        FormTextareas,
        Links,
        Blockquotes
    }
}
</script>
