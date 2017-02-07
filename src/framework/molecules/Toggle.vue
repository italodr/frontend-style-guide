<template>
    <div class="Toggle">
        <transition name="slide">
            <div class="Toggle-content" v-if="slide">
                <slot></slot>
            </div>
        </transition>
        <div class="Toggle-button" v-on:click="slide = !slide">{{ slide ? 'Hide code sample' : 'Show code sample' }}</div>
    </div>
</template>

<script>
export default {
    name: 'Toggle',
    data () {
        return { slide: false }
    }
}
</script>

<style lang="scss" scoped>
.Toggle {
    background: #f1f1f1;

    &-button {
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

.slide-enter-active, .slide-leave-active { transition: all .3s ease-in-out; }
.slide-enter, .slide-leave-to { max-height: 0; }
.slide-enter-to, .slide-leave { max-height: 1000px; }
</style>
