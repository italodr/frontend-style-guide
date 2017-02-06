<template>
    <div class="Block">
        <h2 class="Block-title">{{ obj.title }}</h2>
        <p class="Block-description">{{ obj.description }}</p>
        <slot>
            <div class="Block-samples">
                <span v-for="line in obj.code" v-html="line"></span>
            </div>
            <transition name="slide">
                <div class="Block-code" v-if="slide">
                    <ul>
                        <li v-for="line in obj.code"><pre><code class="language-markup">{{ line|removeAttr }}</code></pre></li>
                    </ul>
                </div>
            </transition>
            <div class="Block-toggle" v-on:click="slide = !slide">{{ slide ? 'Hide code sample' : 'Show code sample' }}</div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['obj'],
    filters: {
        removeAttr (value) {
            let search = /(v-bind:|v-for)/
            return value.replace(new RegExp(search, 'g'), '')
        }
    },
    data () {
        return {
            slide: false
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/organisms/block';
</style>
