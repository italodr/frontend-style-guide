<template>
    <div class="Block">
        <h2 class="Block-title"><slot name="title"></slot></h2>
        <p class="Block-description"><slot name="description"></slot></p>
        <div class="Block-content">
            <slot name="content"></slot>
        </div>
        <slot name="tabs"></slot>
        <slot name="toggle"></slot>
            <!-- <div class="Block-samples">
                <span v-for="line in obj.code" v-html="line"></span>
            </div>
            <toggle>
                <ul>
                    <li v-for="line in obj.code"><pre><code class="language-markup">{{ line|removeAttr }}</code></pre></li>
                </ul>
            </toggle>
        </slot> -->
    </div>
</template>

<script>
import Toggle from '../molecules/Toggle.vue'

export default {
    name: 'Block',
    props: ['obj'],
    components: {
        Toggle
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app';

.Block {
    margin: 8vh 0 15vh;

    &-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 .5rem;
    }

    &-description {
        font-size: 1rem;
        margin: 0 0 2rem;
    }

    &-samples {
        display: block;
        padding: 50px 0;
    }

    &-code {
        background: #f1f1f1;
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 14px;
        padding: 20px 50px;

        li {
            line-height: 1.5;
            margin: 0 0 5px;
        }
    }
}
</style>
