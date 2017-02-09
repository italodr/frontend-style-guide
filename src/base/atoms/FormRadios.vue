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
<label class="Radio"><input class="Radio-input" type="radio" name="my-radio" value="1" /></label>
<label class="Radio"><input class="Radio-input" type="radio" name="my-radio" value="1" disabled /></label>
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
