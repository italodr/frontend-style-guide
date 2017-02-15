<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content" v-html="markup"></div>
        <toggle slot="toggle">
            <markup language="markup" :code="markup"></markup>
        </toggle>
    </block>
</template>

<script>
import Markup from '../../framework/atoms/Markup'
import Toggle from '../../framework/molecules/Toggle.vue'
import Block from '../../framework/organisms/Block'

import '../../assets/scss/atoms/_form_checkboxes.scss'

let markup = `
<label class="FormCheckbox"><input class="FormCheckbox-input" type="checkbox" name="my-checkbox" value="1" /> Sample of a checkbox</label>
<label class="FormCheckbox"><input class="FormCheckbox-input" type="checkbox" name="my-checkbox" value="1" /> Sample of a checkbox</label>
<label class="FormCheckbox"><input class="FormCheckbox-input" type="checkbox" name="my-checkbox" value="1" disabled /> Sample of a disabled checkbox</label>
`

export default {
    name: 'FormCheckboxes',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form Checkboxes',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
</style>
