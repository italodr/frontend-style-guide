<template>
    <div class="Markup">
        <pre><code :class="'language-' + language" ref="markup">{{ code }}</code></pre>
    </div>
</template>

<script>
import Prism from 'prismjs'

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
        let html = Prism.highlight(this.code, Prism.languages.markup)
        this.$refs.markup.innerHTML = html
    }
}
</script>

<style lang="scss" scoped>
.Markup {
    width: 100%;

    code { white-space: normal; }
}
</style>
