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

let markup = `
<ol class="OrderedList">
    <li class="OrderedList-item">List Item 1</li>
    <li class="OrderedList-item">
        List Item 2
        <ol class="OrderedList">
            <li class="OrderedList-item">List Subitem 1</li>
            <li class="OrderedList-item">List Subitem 2</li>
            <li class="OrderedList-item">List Subitem 3</li>
        </ol>
    </li>
    <li class="OrderedList-item">List Item 3</li>
    <li class="OrderedList-item">List Item 4</li>
</ol>
`

export default {
    name: 'OrderedLists',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Ordered Lists',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.OrderedList {

}
</style>
