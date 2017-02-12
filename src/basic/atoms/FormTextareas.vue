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
<textarea class="FormTextarea" name="my-textarea"></textarea>
<textarea class="FormTextarea" name="my-textarea" disabled></textarea>
<textarea class="FormTextarea" name="my-textarea" readonly></textarea>
`

export default {
    name: 'FormTextareas',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form textareas',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.FormTextarea {

}
</style>
