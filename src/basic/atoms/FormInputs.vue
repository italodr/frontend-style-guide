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
import Flatpickr from 'flatpickr'

import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'

let markup = `
<input class="FormInput" type="text" name="my-text" value="" placeholder="Fill this in" />
<input class="FormInput" type="text" name="my-text" value="I'm disabled" disabled />
<input class="FormInput" type="text" name="my-text" value="I'm read-only" readonly />

<input class="FormInput js-flatpickr" type="date" name="my-date" value="" placeholder="Select a date" />
<input class="FormInput" type="password" name="my-password" value="" placeholder="Add password" />
<input class="FormInput" type="email" name="my-email" value="" placeholder="Fill this in" />
<input class="FormInput" type="number" name="my-number" value="" placeholder="Select a number" />
`

export default {
    name: 'FormInputs',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form Inputs',
            description: 'Some description',
            markup: markup
        }
    },
    mounted () {
        let flatpickrElements = document.querySelector('.js-flatpickr')

        Flatpickr(flatpickrElements, {
            enableTime: true,
            altInput: true,
            altFormat: 'F j, Y h:i K'
        })
    }
}
</script>

<style lang="scss">
@import '../../../node_modules/flatpickr/dist/flatpickr.min';

.FormInput {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    font-size: 1rem;
    padding: 8px 12px;
    width: 100%;

    &:disabled {
        background: #e5e5e5;
        cursor: not-allowed;
    }

    &:read-only {
        color: #ccc;
        cursor: not-allowed;
        font-style: italic;
    }

    &::-webkit-input-placeholder { color: #e5e5e5; }
    &:-moz-placeholder { color: #e5e5e5; }
    &::-moz-placeholder { color: #e5e5e5; }
    &:-ms-input-placeholder { color: #e5e5e5; }
}

/* Demo */
.FormInput { margin: 0 0 .5rem; }
</style>
