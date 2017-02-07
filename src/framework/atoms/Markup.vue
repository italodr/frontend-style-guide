<template>
    <div class="Markup">
        <pre>
            <code :class="'language-' + language" v-unescape>
                <slot></slot>
            </code>
        </pre>
    </div>
</template>

<script>
export default{
    props: ['language']
}
</script>

<style lang="scss" scoped>
.Markup {
    width: 100%;

    code { white-space: normal; }
}
</style>
