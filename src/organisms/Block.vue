<template>
    <div class="Block">
        <h2 class="Block-title">{{ obj.title }}</h2>
        <p class="Block-description">{{ obj.description }}</p>

        <div class="Block-samples">
            <span v-for="line in obj.code" v-html="line"></span>
        </div>
        <transition name="slide">
            <div class="Block-code" v-if="slide">
                <ul>
                    <li v-for="line in obj.code"><code class="language-markup">{{ line|removeAttr }}</code></li>
                </ul>
            </div>
        </transition>
        <div class="Block-toggle" v-on:click="slide = !slide">{{ slide ? 'Hide code sample' : 'Show code sample' }}</div>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['obj'],
    data () {
        return {
            slide: false
        }
    }
}
</script>

<style lang="scss">
.Block {
    margin: 0 0 30px;

    &-title {
        font-size: 28px;
        margin: 0 0 10px;
    }

    &-description {
        font-size: 16px;
        margin: 0 0 20px;
    }

    &-samples {
        border: 1px solid #f1f1f1;
        display: block;
        padding: 50px;
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

    &-toggle {
        background: #f1f1f1;
        border: 1px solid #f1f1f1;
        border-radius: 0 0 4px 4px;
        border-width: 0 1px 0 1px;
        box-shadow:inset 0 1px 0 0 hsla(0, 30%, 0%, .1);
        cursor: pointer;
        font-size: 12px;
        font-weight: 700;
        padding: 10px 50px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        z-index: 1;
    }
}

.slide-enter-active, .slide-leave-active {
    transition: all .3s ease-in-out;
}
.slide-enter, .slide-leave-to {
    max-height: 0;
}
.slide-enter-to, .slide-leave {
    max-height: 1000px;
}
</style>
