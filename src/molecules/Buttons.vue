<template>
    <block v-bind:obj="component"></block>
</template>

<script>
import Block from '../organisms/Block'

let buttonLabel = 'Label';

export default {
    name: 'Buttons',
    components: {
        Block
    },
    data () {
        return {
            component: {
                title: 'Buttons',
                description: 'Some description',
                code: [
                    '<a class="Button" href="#">' + buttonLabel + '</a>',
                    '<a class="Button Button--hollow" href="#">' + buttonLabel + '</a>'
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* Sample, it will be replaced by the compiled style */
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
