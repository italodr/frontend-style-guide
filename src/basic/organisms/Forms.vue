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
<form class="Form">
    <label class="FormLabel" for="exampleInputName">Nombre</label>
    <input class="FormInput" type="text" id="exampleInputName" placeholder="Nombre">
    <label class="FormLabel" for="exampleInputLastname">Apellidos</label>
    <input class="FormInput" type="text" id="exampleInputLastname" placeholder="Apellidos">
    <label class="FormLabel" for="exampleInputEmail">Email</label>
    <input class="FormInput" type="email" id="exampleInputEmail" placeholder="Email">
    <label class="FormLabel" for="exampleInputFile">File</label>
    <input class="FormInput" type="file" id="exampleInputFile">
    <label class="FormLabel" for="exampleDropdown">Dropdown</label>
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
    <label class="FormCheckbox" for="CheckMe"><input class="FormCheckbox-input" type="checkbox" id="CheckMe"> Check me out before you go go!</label>
    <button type="submit" class="Button">Submit</button>
</form>
`

export default {
    name: 'Forms',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Form',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
/* Demo */
.Form {
    .FormCheckbox {
        display: block;
        padding: 1rem 0;
        width: 100%;
    }
}
</style>
