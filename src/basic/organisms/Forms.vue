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
import $ from 'jquery'

import Validation from '../../assets/js/Validation.js'

$(document).ready(function () {
    Validation();
});

import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle'
import Markup from '../../framework/atoms/Markup'

import '../../assets/scss/organisms/_forms.scss'

let markup = `
<form class="Form js-validateForm" data-validate-options="example">
    <label class="FormLabel" for="exampleInputName">Nombre</label>
    <input class="FormInput" type="text" name="exampleInputName" id="exampleInputName" placeholder="Nombre">
    <label class="FormLabel" for="exampleInputLastname">Apellidos</label>
    <input class="FormInput" type="text" name="exampleInputLastname" id="exampleInputLastname" placeholder="Apellidos">
    <label class="FormLabel" for="exampleInputEmail">Email</label>
    <input class="FormInput" type="email" name="exampleInputEmail" id="exampleInputEmail" placeholder="Email">
    <label class="FormLabel" for="exampleInputFile">File</label>
    <input class="FormInput" type="file" name="exampleInputFile" id="exampleInputFile">
    <label class="FormLabel" for="exampleDropdown">Dropdown</label>
    <div class="FormDropdown">
        <select class="FormDropdown-select" name="exampleDropdown">
            <option class="FormDropdown-empty" value="">Select something...</option>
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
    <label class="FormLabel" for="exampleRequired">Conditional Required sield</label>
    <input class="FormInput" type="text" name="exampleRequired" id="exampleRequired" placeholder="Conditional Required sield">
    <label class="FormCheckbox" for="exampleCheckboxRequire"><input class="FormCheckbox-input" name="exampleCheckboxRequire" type="checkbox" id="exampleCheckboxRequire"> Check me to require the above field</label>
    <label class="FormCheckbox" for="Privacy"><input class="FormCheckbox-input" name="exampleCheckbox" type="checkbox" id="Privacy"> Check me out before you go go!</label>
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
.Form {
    .FormCheckbox {
        display: block;
        padding: 1rem 0;
        width: 100%;
    }
}
</style>
