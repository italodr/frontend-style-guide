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
import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'

import '../../assets/scss/atoms/_form_dropdowns.scss'

let markup = `
<div class="FormDropdown">
    <select class="FormDropdown-select">
        <optgroup label="Group No 1">
            <option value="1-1">Element 1</option>
            <option value="1-2">Element 2</option>
            <option value="1-3">Element 3</option>
        </optgroup>
        <optgroup label="Group No 2">
            <option value="2-1">Element 1</option>
            <option value="2-2" disabled>Element 2</option>
            <option value="2-3" disabled>Element 3</option>
        </optgroup>
    </select>
</div>
`

export default {
    name: 'FormDropdowns',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            anchor: 'FormDropdowns',
            title: 'Form dropdowns',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.FormDropdown { margin: 0 0 .5rem; }
</style>
