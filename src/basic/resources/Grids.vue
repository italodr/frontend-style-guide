<template>
    <block :id="anchor">
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div slot="content">
            <div v-html="markup"></div>
            <p class="Note">Requires the use of <a href="#Breakpoints">Breakpoints</a></p>
        </div>
        <tabs class="Sample-margin" slot="tabs">
            <tab slot="tab" label="Sass Flexbox grid" selected>
                <markup slot="tabContent" language="scss" :code="grid"></markup>
            </tab>
            <tab slot="tab" label="Sass Variables">
                <markup slot="tabContent" language="scss" :code="vars"></markup>
            </tab>
            <tab slot="tab" label="Sass Utilities">
                <markup slot="tabContent" language="scss" :code="utils"></markup>
            </tab>
            <tab slot="tab" label="Grid Sample">
                <markup slot="tabContent" language="markup" :code="markup"></markup>
            </tab>
        </tabs>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block'
import Tabs from '../../framework/molecules/Tabs'
import Tab from '../../framework/atoms/Tab'
import Markup from '../../framework/atoms/Markup'

import { VARIABLES, GRID_CLASSES, UTILITIES } from '../data/GridTabs.js'

const markup = `
<div class="Sample u-flex--wrap">
    <div class="Sample-item u-flex--s640-12 u-flex--s1024-18"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s1024-6"></div>

    <div class="Sample-item u-flex--s640-8 u-flex--s1024-12"></div>
    <div class="Sample-item u-flex--s640-8 u-flex--s1024-6"></div>
    <div class="Sample-item u-flex--s640-8 u-flex--s1024-6"></div>

    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
    <div class="Sample-item u-flex--s640-12 u-flex--s960-8 u-flex--s1200-4"></div>
</div>
`

export default {
    components: {
        Block,
        Markup,
        Tabs,
        Tab
    },
    data () {
        return {
            anchor: 'Grids',
            title: 'Grid',
            description: 'Some description',
            vars: VARIABLES,
            grid: GRID_CLASSES,
            utils: UTILITIES,
            markup: markup
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/app';

.Sample {
    margin: 0 0 2rem;

    &-item {
        background: rgba($c-framework-primary, .5);
        height: 50px;
        outline: 1px solid $c-framework-primary;
    }

    &-margin { margin: 2rem 0 0; }
}
</style>
