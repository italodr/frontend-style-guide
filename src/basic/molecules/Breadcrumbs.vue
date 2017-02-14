<template>
    <block :id="anchor">
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
<ul class="Breadcrumbs-" itemscope="" itemtype="http://schema.org/BreadcrumbList">
    <li class="Breadcrumbs-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a href="#" itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
            <span itemprop="name">Breadcrumb 1</span>
        </a>
        <meta itemprop="position" content="1">
    </li>
    <li class="Breadcrumbs-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <a href="#" itemscope="" itemtype="http://schema.org/Thing" itemprop="item">
            <span itemprop="name">Breadcrumb 2</span>
        </a>
        <meta itemprop="position" content="2">
    </li>
    <li class="Breadcrumbs-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
        <span itemprop="name">Breadcrumb 3</span>
        <meta itemprop="position" content="3">
    </li>
</ul>
`

export default {
    name: 'Breadcrumbs',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            anchor: 'Breadcrumbs',
            title: 'Breadcrumbs',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Breadcrumbs {
    &-item {
        display: inline-block;

        &:not(:last-child) {
            &::after {
                content: '\203A';
                display: inline-block;
                font-size: 1.25em;
                margin: 0 8px;
            }
        }
    }
}
</style>
