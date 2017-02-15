<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
            <div class="Sample u-flex--wrap">
                <div class="Sample-column u-flex--s768-12">
                    <div v-html="markup"></div>
                </div>
                <div class="Sample-column is-oposite u-flex--s768-12">
                    <div v-html="markup"></div>
                </div>
            </div>
            <p class="Note">Requires the use of <a href="#Breakpoints">Fluid Font Type</a></p>
        </div>
        <tabs slot="tabs">
            <tab slot="tab" label="Usage" selected>
                <markup slot="tabContent" language="markup" :code="markup"></markup>
            </tab>
            <tab slot="tab" label="Mixins">
                <markup slot="tabContent" language="scss" :code="mixins"></markup>
            </tab>
            <tab slot="tab" label="Sass classes">
                <markup slot="tabContent" language="scss" :code="sass"></markup>
            </tab>
        </tabs>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Tabs from '../../framework/molecules/Tabs'
import Tab from '../../framework/atoms/Tab'
import Markup from '../../framework/atoms/Markup'

import '../../assets/scss/atoms/_headings.scss'
import { MIXINS, SASS } from '../data/HeadingTabs'

let markup = `
<h1 class="t-h1">This is an h1 heading</h1>
<h2 class="t-h2">This is an h2 heading</h2>
<h3 class="t-h3">This is an h3 heading</h3>
<h4 class="t-h4">This is an h4 heading</h4>
<h5 class="t-h5">This is an h5 heading</h5>
<h6 class="t-h6">This is an h6 heading</h6>
`

export default {
    name: 'Headings',
    components: {
        Block,
        Toggle,
        Markup,
        Tabs,
        Tab
    },
    data () {
        return {
            title: 'Headings',
            description: 'Some description',
            mixins: MIXINS,
            sass: SASS,
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Sample {
    &-column {
        padding: 1rem;

        &.is-oposite {
            background: #333;
            color: #fff;
        }
    }
}
</style>
