<template>
    <div class="MainContent">
        <h1 class="MainContent-title">{{ config.title }}</h1>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import config from '../../data/config.js'

export default {
    name: 'MainContent',
    data () {
        return {
            config: config
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/app';

.MainContent {
    height: 100vh;
    overflow: auto;
    padding: 20px;
    width: 100%;

    &-title {
        font-size: 2rem;
        font-weight: 700;
    }
}
/*
@include breakpoint($s1024) {
    .MainContent {
        width: 80%;

        &::before { content: none; }
    }
}
*/
</style>
