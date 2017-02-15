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

import { VARIABLES, SASS_ARRAY, MIXINS } from '../data/BreakpointTabs'

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
            vars: VARIABLES,
            arr: SASS_ARRAY,
            mixins: MIXINS
        }
    }
}
</script>

<style lang="scss">
</style>
