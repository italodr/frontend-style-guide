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
<div class="FormDropdown">
    <select class="FormDropdown-select">
        <optgroup label="Group No 1">
            <option value="1-1">Element 1</option>
            <option value="1-2">Element 2</option>
            <option value="1-3">Element 3</option>
        </optgroup>
        <optgroup label="Group No 2">
            <option value="2-1">Element 1</option>
            <option value="2-2" disabled>Element 2</option>
            <option value="2-3" disabled>Element 3</option>
        </optgroup>
    </select>
</div>
`

export default {
    name: 'FormDropdowns',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form dropdowns',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.FormDropdown {
    position: relative;
    display: inline-block;
    width: 100%;

    &::after {
        content: '\203A';
        display: block;
        font-size: 1.35rem;
        pointer-events: none;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center;
        z-index: 1;
    }

    &-select {
        appearance: none;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        line-height: 1;
        padding: 8px 50px 8px 12px;
        width: 100%;
        outline: 0 !important;

        &::-ms-expand { display: none; /* gte ie10 */ }
    }
}
</style>
