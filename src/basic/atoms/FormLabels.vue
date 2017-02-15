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

import '../../assets/scss/atoms/_form_labels.scss'

let markup = `
<label class="FormLabel">Este es un label</label>
`

export default {
    name: 'FormLabels',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form Labels',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
</style>
