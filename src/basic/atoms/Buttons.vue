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
            anchor: 'Buttons',
            title: 'Buttons',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Button {
    background: #61bfad;
    border: 0;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    font-size: 14px;
    line-height: 1;
    overflow: visible;
    padding: 12px 24px 10px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    -webkit-user-select: none; /* for button */
       -moz-user-select: none;
        -ms-user-select: none;

    &:hover { background: lighten(#61bfad, 15); }

    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
}

input.Button,
button.Button {
    -webkit-appearance: button; /* for input */
}

.Button { margin: 0 .75rem 1rem 0; }
</style>
