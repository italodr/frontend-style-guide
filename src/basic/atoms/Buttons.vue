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

import '../../assets/scss/atoms/_buttons.scss'

let markup = `
<a class="Button" role="button" href="#">Link Button</a>
<a class="Button Button--hollow" role="button" href="#">Link Button</a>
<a class="Button is-disabled" role="button" href="#">Disabled Link Button</a>
<span class="Button" role="button" tabindex="0">Span Button</span>

<input class="Button" type="submit" value="Submit Input">
<input class="Button" type="reset" value="Reset Input">
<input class="Button" type="button" value="Button Input">
<button class="Button" type="button">Submit Button</button>
<button class="Button" type="button" disabled>Disabled Submit Button</button>
`

export default {
    name: 'Buttons',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Buttons',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Button { margin: 0 .75rem 1rem 0; }
</style>
