<template>
    <block :id="anchor">
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
            <div class="Sample u-flex--wrap">
                <div class="u-flex--s768-12">
                    <div v-html="markup"></div>
                </div>
                <div class="Sample-oposite u-flex--s768-12">
                    <div v-html="markup"></div>
                </div>
            </div>
        </div>
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
        Markup
    },
    data () {
        return {
            anchor: 'Headings',
            title: 'Headings',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/app';

h1, .t-h1, .s-h1 { @include fluid-type(34px, 48px); }
h2, .t-h2, .s-h2 { @include fluid-type(28px, 36px); }
h3, .t-h3, .s-h3 { @include fluid-type(24px, 32px); }
h4, .t-h4, .s-h4 { @include fluid-type(20px, 28px); }
h5, .t-h5, .s-h5 { @include fluid-type(16px, 24px); }
h6, .t-h6, .s-h6 { @include fluid-type(14px, 18px); }

h1, .t-h1,
h2, .t-h2,
h3, .t-h3,
h4, .t-h4,
h5, .t-h5,
h6, .t-h6 {
    font-weight: 700;
    margin: 0 0 1rem;
}

.Sample {
    &-oposite {
        background: #333;
        color: #fff;
    }
}
</style>
