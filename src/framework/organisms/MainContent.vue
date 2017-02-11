<template>
    <div class="MainContent">
        <h1 class="MainContent-title">{{ title }}</h1>
        <basic></basic>
        <custom></custom>
    </div>
</template>

<script>
import Basic from '../../basic/Basic.vue'
import Custom from '../../custom/Custom'

export default {
    name: 'MainContent',
    components: {
        Basic,
        Custom
    },
    data () {
        return {
            title: 'Frontend Style Guide'
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

    &::before {
        background: hsla(0, 100%, 0%, .75);
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
        transition: opacity .5s linear;
        width: 100%;
        z-index: 8;

        .sidebar-open & { opacity: 1; }
    }
}

@include breakpoint($s1024) {
    .MainContent {
        width: 80%;

        &::before { content: none; }
    }
}
</style>
