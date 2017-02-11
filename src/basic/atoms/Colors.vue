<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
            <div class="Colors">
                <div class="Colors-section" v-for="section in colors">
                    <h2 class="Colors-title">{{ section.title }}</h2>
                    <ul class="Colors-list">
                        <li class="Colors-item" v-for="color, key in section.colors">
                            <div class="Colors-sample" :style="'background:' + color"></div>
                            <div class="Colors-info">
                                <span class="Colors-code">$c-{{ key }}</span>
                                <span class="Colors-hex">{{ color }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <tabs slot="tabs">
            <tab label="Sass Variables" selected>
                <markup language="scss" :code="colorsVars()"></markup>
            </tab>
            <tab label="Options">Options tab</tab>
            <tab label="Tasks">Tasks tab</tab>
            <tab label="Other stuff">Other stuff</tab>
            <tab label="Styling">Styling tab</tab>
        </tabs>
    </block>
</template>

<script>
import Tab from '../../framework/atoms/Tab.vue'
import Markup from '../../framework/atoms/Markup'

import Tabs from '../../framework/molecules/Tabs.vue'
import Toggle from '../../framework/molecules/Toggle.vue'

import Block from '../../framework/organisms/Block'

import colors from '../../data/colors.js'

export default {
    name: 'Colors',
    components: {
        Block,
        Toggle,
        Markup,
        Tabs,
        Tab
    },
    methods: {
        colorsVars: function () {
            let vars = '$colors:'

            Object.keys(colors).forEach(function (key) {
                Object.keys(colors[key].colors).forEach(function (name, index) {
                    vars += `
    (${name}, $c-${name})`
                });
            });

            return vars;
        }
    },
    data () {
        return {
            title: 'Colors',
            description: '',
            colors: colors
        }
    }
}
</script>

<style lang="scss">
.Colors {
    &-section { margin: 0 0 2rem; }

    &-title {
        border: solid #ccc;
        border-width: 0 0 1px;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 1rem;
    }

    &-list {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    }

    &-item {
        align-items: center;
        display: flex;
        padding: 0 1rem 1rem 0;
        width: 100%;

        @media screen and ('min-width: 640px') { width: 50%; }
        @media screen and ('min-width: 768px') { width: 33.33333%; }
        @media screen and ('min-width: 960px') { width: 25%; }
        @media screen and ('min-width: 1200px') { width: 20%; }
    }

    &-code,
    &-hex {
        display: block;
        font-size: .85rem;
        line-height: 1.75;
    }

    &-code {
        font-style: italic;
        font-weight: 700;
    }

    &-info {
        padding: 0 0 0 1rem;
        width: 100%;
    }

    &-sample {
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
        flex: 0 0 50px;
        height: 50px;
        width: 50px;
    }
}
</style>
