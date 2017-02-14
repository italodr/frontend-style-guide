<template>
    <block :id="anchor">
        <div class="Block-samples" v-html="markup"></div>
        <toggle>
            <markup language="markup">markup</markup>
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
    name: 'DefinitionLists',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            anchor: 'DefinitionLists',
            title: 'Definition List',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.DefinitionList {
    &-title, &-value { display: block; }

    &-title {
        border: solid #f1f1f1;
        border-width: 1px 0 0;
        font-weight: 700;
        margin: 0 0 .25rem;
        padding: .5rem 0 0;

        &:first-child { border: 0; }
    }

    &-value {
        margin: 0 0 .5rem;

        a { word-break: break-all; }
    }
}

@media screen and ('min-width: 768px') {
    .DefinitionList {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;

        &-title, &-value {
            border: solid #f1f1f1;
            border-width: 1px 0 0;
            margin: 0;
            padding: .5rem 0;

            &:nth-child(-n + 2) { border-width: 0; }
        }

        &-title { width: 20%; }

        &-value {
            width: 80%;

            &::after {
                content: '\A';
                white-space: pre;
            }
        }
    }
}
/* Style for framework demo */
.DefinitionList { margin: 0 0 2rem; }
</style>
