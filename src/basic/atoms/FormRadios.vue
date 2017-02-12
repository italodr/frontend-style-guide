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
<label class="FormRadio"><input class="FormRadio-input" type="radio" name="my-radio" value="1" /> Sample of a radio button</label>
<label class="FormRadio"><input class="FormRadio-input" type="radio" name="my-radio" value="1" /> Sample of a radio button</label>
<label class="FormRadio"><input class="FormRadio-input" type="radio" name="my-radio" value="1" disabled /> Sample of a disabled radio button</label>
`

export default {
    name: 'FormRadios',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form Radios',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.FormRadio {

}
</style>
