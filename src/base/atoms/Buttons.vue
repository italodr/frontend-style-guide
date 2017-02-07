<template>
    <block v-bind:obj="component">
        <div class="Block-samples">
            <span v-for="line in code" v-html="line"></span>
        </div>
        <toggle>
            <markup v-for="line in code" language="markup">{{ line|removeAttr }}</markup>
        </toggle>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'

let buttonLabel = 'Submit';

export default {
    name: 'Buttons',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            component: {
                title: 'Buttons',
                description: 'Some description'
            },
            code: [
                '<a class="Button" href="#">' + buttonLabel + '</a>',
                '<a class="Button Button--hollow" href="#">' + buttonLabel + '</a>'
            ]
        }
    }
}
</script>

<style lang="scss">
.Button {
    background: #bada55;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;

    &:hover { opacity: .75; }
}

.Button { margin: 0 10px 0 0; }
</style>
