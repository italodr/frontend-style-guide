<template>
    <block :id="anchor">
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content" v-html="markup"></div>
        <toggle slot="toggle">
            <markup language="markup" :code="markup"></markup>
        </toggle>
        <tabs class="Sample-margin" slot="tabs">
            <tab slot="tab" label="Javascript" selected>
                <markup slot="tabContent" language="js">
$('.js-alert').on('click', function () {
    $(this).fadeOut();
});
                </markup>
            </tab>
        </tabs>
    </block>
</template>

<script>
import $ from 'jquery'

$(document).ready(function () {
    $('.js-alert').on('click', function () {
        $(this).fadeOut();
    });
});

import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'
import Tabs from '../../framework/molecules/Tabs'
import Tab from '../../framework/atoms/Tab'

let markup = `
<div class="Alert is-info js-alert">This is an info alert message</div>
<div class="Alert is-error js-alert">This is an error alert message</div>
<div class="Alert is-warning js-alert">This is a warning alert message</div>
<div class="Alert is-success js-alert">This is a success alert message</div>

<form class="Form">
    <label class="FormLabel is-error" for="exampleInputName">Nombre</label>
    <input class="FormInput is-error" type="text" id="exampleInputName" placeholder="Nombre">
    <label class="FormLabel is-warning" for="exampleInputLastname">Apellidos</label>
    <input class="FormInput is-warning" type="text" id="exampleInputLastname" placeholder="Apellidos">
    <label class="FormLabel is-success" for="exampleInputEmail">Email</label>
    <input class="FormInput is-success" type="email" id="exampleInputEmail" placeholder="Email">
    <label class="FormLabel" for="exampleInputFile">File</label>
    <input class="FormInput is-success" type="file" id="exampleInputFile">
    <label class="FormLabel" for="exampleDropdown">Dropdown</label>
    <div class="FormDropdown is-success">
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
    <label class="FormCheckbox is-error" for="CheckMe"><input class="FormCheckbox-input" type="checkbox" id="CheckMe"> Check me out before you go go!</label>
</form>
`

export default {
    name: 'Alerts',
    components: {
        Block,
        Toggle,
        Markup,
        Tabs,
        Tab
    },
    data () {
        return {
            anchor: 'Alerts',
            title: 'Alerts',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/app';

.Alert {
    border: 1px solid;
    border-radius: 3px;
    cursor: pointer;
    padding: 1rem 2rem;
    position: relative;
    width: 100%;

    &::after {
        color: currentColor;
        content: '×';
        font-size: 1.5rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }

    &.is-info {
        background: $c-info-background;
        border-color: $c-info-border;
        color: $c-info-color;
    }

    &.is-error {
        background: $c-error-background;
        border-color: $c-error-border;
        color: $c-error-color;
    }

    &.is-warning {
        background: $c-warning-background;
        border-color: $c-warning-border;
        color: $c-warning-color;
    }

    &.is-success {
        background: $c-success-background;
        border-color: $c-success-border;
        color: $c-success-color;
    }
}

/* Demo */
.Alert { margin: 0 0 1rem; }
</style>
