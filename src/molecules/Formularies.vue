<template>
    <block v-bind:obj="component"></block>
</template>

<script>
import Block from '../organisms/Block'

let submitLabel = 'Send';
let html = `
<form class="Form">
    <label class="Form-label">My label</label>
    <input type="text" name="search" class="Form-input">
    <button type="submit" class="Form-button">${submitLabel}</button>
</form>
`;

export default {
    name: 'Formularies',
    components: {
        Block
    },
    data () {
        return {
            component: {
                title: 'Form',
                description: 'Some description for my form',
                code: [
                    html
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* Sample, it will be replaced by the compiled style */
.Form {
    &-label {
        display: block;
        font-size: 14px;
    }

    &-input {
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px 10px;
        width: 100%;
    }

    &-button {
        background: blue;
        border: 0;
        color: white;
        padding: 8px 20px;
        text-align: center;
    }
}
</style>
