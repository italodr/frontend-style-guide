<template>
    <block :id="anchor">
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
<a class="Link" href="#">Submit</a>
`

export default {
    name: 'Links',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            anchor: 'Links',
            title: 'Links',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Link {

}
</style>
