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
<select class="FormDropdown">
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
            title: 'Form dropdowns',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.FormDropdown {

}
</style>
