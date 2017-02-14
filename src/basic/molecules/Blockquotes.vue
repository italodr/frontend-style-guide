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
            anchor: 'Blockquotes',
            title: 'Blockquote',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
.Blockquote {
    background: #fff;
    border: solid #61bfad;
    border-width: 0 2px 0 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    display: block;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.2;
    margin: 0 0 .75rem;
    padding: 15px 30px 15px 60px;
    position: relative;
    text-align: justify;

    &::before {
        color: #999;
        content: "\201C";
        font-family: Georgia, serif;
        font-size: 60px;
        font-weight: 700;
        left: 10px;
        position: absolute;
        top:5px;
    }

    &-cite a, a {
        color: #61bfad;
        cursor: pointer;
        text-decoration: none;

        &:hover { text-decoration: underline; }
    }

    &-info {
        font-size: .75rem;
        font-style: italic;
    }

    &-author { font-weight: 700; }
}
</style>
