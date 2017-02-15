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

import '../../assets/scss/molecules/_blockquotes.scss'

let markup = `
<figure itemprop="mentions" itemscope itemtype="http://schema.org/Article">
    <blockquote class="Blockquote">
        Great things are done by a series of small things brought together.
    </blockquote>

    <figcaption class="Blockquote-info">
        <span itemprop="author" class="Blockquote-author">Vincent van Gogh</span>,
        <cite itemprop="name" class="Blockquote-cite">
            <a itemprop="url" href="https://www.brainyquote.com/quotes/quotes/v/vincentvan120866.html" target="_blank" rel="noreferrer noopener">Brainy Quote</a>
        </cite>,
        <span itemprop="publisher" class="Blockquote-publisher">Brainy Quote</span>
    </figcaption>
</figure>
`

export default {
    name: 'Blockquotes',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Blockquote',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
</style>
