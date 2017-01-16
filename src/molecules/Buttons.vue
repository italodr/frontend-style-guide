<template>
    <block v-bind:obj="buttons"></block>
</template>

<script>
import Block from '../organisms/Block'

export default {
    name: 'Buttons',
    components: {
        Block
    },
    data () {
        return {
            buttons: {
                title: 'Buttons',
                description: 'Some description',
                code: [
                    '<a class="Button" v-bind:href="#">Label</a>',
                    '<a class="Button Button--hollow" v-bind:href="#">Label</a>'
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
