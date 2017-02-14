<template>
    <div class="Markup">
        <pre><code ref="markup" :class="'language-' + language"><slot>{{ code }}</slot></code></pre>
    </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-scss.js';
import beautifyJS, { html as beautifyHTML, css as beautifyCSS } from 'js-beautify'

// Prism.setDefaults({
//     'remove-trailing': true,
//     'remove-indent': false,
//     'left-trim': true,
//     'right-trim': true,
//     'break-lines': 80,
//     'indent': 2,
//     'remove-initial-line-feed': false,
//     'tabs-to-spaces': 4,
//     'spaces-to-tabs': 4
// })

export default{
    props: ['language', 'code'],
    mounted () {
        let html = Prism.highlight(this.code, Prism.languages[this.language])
        this.$refs.markup.innerHTML = html
    }
}
</script>

<style lang="scss" scoped>
.Markup {
    width: 100%;

    pre {
        font-size: 14px;
        overflow: auto;
        padding: 2rem;
    }
}
</style>
