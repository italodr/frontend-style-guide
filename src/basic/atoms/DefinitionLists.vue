<template>
    <block>
        <div class="Block-samples" slot="content" v-html="markup"></div>
        <toggle slot="toggle">
            <markup language="markup">markup</markup>
        </toggle>
    </block>
</template>

<script>
import Markup from '../../framework/atoms/Markup'
import Toggle from '../../framework/molecules/Toggle.vue'
import Block from '../../framework/organisms/Block'

import '../../assets/scss/atoms/_definition_lists.scss'

let markup = `
<dl class="DefinitionList">
    <dt class="DefinitionList-title">Definition title 1</dt>
    <dd class="DefinitionList-value">Definition value 1</dd>
    <dt class="DefinitionList-title">Definition title 2</dt>
    <dd class="DefinitionList-value">Definition value 2</dd>
    <dt class="DefinitionList-title">Definition title 3</dt>
    <dd class="DefinitionList-value">Definition value 3</dd>
</dl>
`

export default {
    name: 'DefinitionLists',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Definition List',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.DefinitionList { margin: 0 0 2rem; }
</style>
