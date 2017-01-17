<template>
    <block v-bind:obj="component"></block>
</template>

<script>
import Block from '../organisms/Block'

let submitLabel = 'Send';
let html = `
<form class="Search">
    <input type="text" name="search">
    <button type="submit" class="Search-button">${submitLabel}</button>
</form>
`;

export default {
    name: 'Search',
    components: {
        Block
    },
    data () {
        return {
            component: {
                title: 'Search',
                description: 'Some description for my search',
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
.Search {
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: center;

    &-button {
        background: blue;
        border: 0;
        color: white;
    }
}
</style>
