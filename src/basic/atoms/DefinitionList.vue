<template>
    <block>
        <div class="Block-samples" v-html="{{ markup }}"></div>
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
    name: 'DefinitionList',
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
.DefinitionList {

}
</style>
