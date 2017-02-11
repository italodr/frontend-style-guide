<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content" v-html="markup"></div>
        <toggle>
            <markup language="markup">{{ markup }}</markup>
        </toggle>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'

let markup = `
<label class="FormCheckbox"><input class="FormCheckbox-input" type="checkbox" name="my-checkbox" value="1" /></label>
<label class="FormCheckbox"><input class="FormCheckbox-input" type="checkbox" name="my-checkbox" value="1" disabled /></label>
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
.FormCheckbox {

}
</style>
