<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-content" slot="content">
            <dl class="DefinitionList">
                <dt class="DefinitionList-title">$s0</dt>
                <dd class="DefinitionList-value">from 0 to 479px</dd>
                <dt class="DefinitionList-title">$s480</dt>
                <dd class="DefinitionList-value">from 480px to 639px</dd>
                <dt class="DefinitionList-title">$s640</dt>
                <dd class="DefinitionList-value">from 640px to 767px</dd>
                <dt class="DefinitionList-title">$s768</dt>
                <dd class="DefinitionList-value">from 768px to 959px</dd>
                <dt class="DefinitionList-title">$s960</dt>
                <dd class="DefinitionList-value">from 960px to 1023px</dd>
                <dt class="DefinitionList-title">$s1024</dt>
                <dd class="DefinitionList-value">from 1024px to 1199px</dd>
                <dt class="DefinitionList-title">$s1200</dt>
                <dd class="DefinitionList-value">from 1200px to 1439px</dd>
                <dt class="DefinitionList-title">$s1440</dt>
                <dd class="DefinitionList-value">from 1440px to 1919px</dd>
                <dt class="DefinitionList-title">$s1920</dt>
                <dd class="DefinitionList-value">from 1920px</dd>
            </dl>
        </div>
        <tabs slot="tabs">
            <tab slot="tab" label="Sass Variables" selected>
                <markup slot="tabContent" language="scss" :code="vars"></markup>
            </tab>
            <tab slot="tab" label="Sass Class Array">
                <markup slot="tabContent" language="scss" :code="arr"></markup>
            </tab>
            <tab slot="tab" label="Sass Mixins">
                <markup slot="tabContent" language="scss" :code="mixins"></markup>
            </tab>
        </tabs>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block.vue'
import Tabs from '../../framework/molecules/Tabs.vue'
import Tab from '../../framework/atoms/Tab.vue'
import Markup from '../../framework/atoms/Markup'

const vars = `
$s0: (0, 479px);
$s480: (480px, 639px);
$s640: (640px, 767px);
$s768: (768px, 959px);
$s960: (960px, 1023px);
$s1024: (1024px, 1199px);
$s1200: (1200px, 1439px);
$s1440: (1440px, 1919px);
$s1920: (1920px, 0);

$screen: "only screen" !default;
`

const arr = `
$breakpoints: (
    (xxs, $s0),
    (xs, $s480),
    (sm, $s640),
    (md, $s768),
    (lg, $s960),
    (xl, $s1024),
    (xxl, $s1200),
    (sxl, $s1440),
    (sxxl, $s1920)
);
`

const mixins = `
@mixin breakpoint-retina() {
    /* stylelint-disable */
    @media #{$screen} and (-webkit-min-device-pixel-ratio: 2),
        #{$screen} and (-o-min-device-pixel-ratio: 2/1),
        #{$screen} and (min--moz-device-pixel-ratio: 2),
        #{$screen} and (min-device-pixel-ratio: 2),
        #{$screen} and (min-resolution: 192dpi),
        #{$screen} and (min-resolution: 2dppx) {
        @content;
    }
    /* stylelint-enable */
}

@mixin breakpoint-max($range) {
    @media #{$screen} and (max-width: #{(nth($range, 1) - 1px)}) {
        @content;
    }
}

@mixin breakpoint($range, $orientation: '', $only: false) {
    @if $orientation != '' {
        $orientation: "and (orientation: #{$orientation})";
    }

    /* stylelint-disable */
    @if $only == true {
        @media #{$screen} and (min-width: #{nth($range, 1)}) and (max-width: #{nth($range, 2)}) #{$orientation} {
            @content;
        }
    }

    @else {
        @media #{$screen} and (min-width: #{nth($range, 1)}) #{$orientation} {
            @content;
        }
    }
    /* stylelint-enable */
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
            title: 'Breakpoints',
            description: 'Some description',
            vars: vars,
            arr: arr,
            mixins: mixins
        }
    }
}
</script>

<style lang="scss">
</style>
