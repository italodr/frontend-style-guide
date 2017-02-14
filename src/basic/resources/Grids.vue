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

const vars = `
$global-max-width: 1440px;
$grid-columns: 24;
`

const grid = `
.u-flex { display: flex; }
.u-flex--inline { display: inline-flex; }
.u-flex--alignCenter { align-items: center; }
.u-flex--alignStart { align-items: flex-start; }
.u-flex--alignEnd { align-items: flex-end; }
.u-flex--justifyCenter { justify-content: center; }
.u-flex--justifyStart { justify-content: flex-start; }
.u-flex--justifyEnd { justify-content: flex-end; }
.u-flex--justifyBetween { justify-content: space-between; }
.u-flex--justifyAround { justify-content: space-around; }
.u-flex--reverse { flex-direction: row-reverse; }

.u-flex--column {
    flex-direction: column;

    &.u-flex--reverse { flex-direction: column-reverse; }
}

.u-flex--wrap {
    display: flex;
    flex-wrap: wrap;
}

.u-flex--center {
    align-items: center;
    display: flex;
    justify-content: center;
}

@function get-column-percentage($column-num) {
    @return $column-num / $grid-columns * 100%;
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint($breakpoint) {
        .u-flex--#{$namespace} { display: flex; }

        .u-flex--#{$namespace}-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .u-flex--#{$namespace}-wrap {
            display: flex;
            flex-wrap: wrap;
        }
    }

    @for $i from 1 through $grid-columns {
        .u-flex--#{$namespace}-#{$i} {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint($breakpoint) {
        @for $i from 1 through $grid-columns {
            .u-flex--#{$namespace}-#{$i} {
                flex-basis: get-column-percentage($i);
                max-width: get-column-percentage($i);
            }
        }
    }
}
`

const utils = `
.u-wrapper,
.u-wrapperPadding {
    padding-left: space();
    padding-right: space();
    position: relative;

    @include breakpoint($s768) {
        padding-left: space(2);
        padding-right: space(2);
    }
}

.u-wrapper {
    height: 100%;
    margin: 0 auto;
    max-width: $global-max-width;

    @media screen and (min-width: $global-max-width + get-pxs(space(2) * 2)) {
        padding-left: 0;
        padding-right: 0;
    }

    &.is-collapse {
        padding-left: 0;
        padding-right: 0;
    }

    &.is-small { max-width: 1200px; }
    &.is-reading { max-width: 960px; }
}

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint-max($breakpoint) {
        .u-wrapper.is-collapse--#{$namespace} {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @include breakpoint($breakpoint) {
        .u-wrapperPadding.is-collapse--#{$namespace} {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
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
            vars: vars,
            grid: grid,
            utils: utils,
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
