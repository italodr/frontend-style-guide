<template>
    <div class="NotFound">
        <h2 class="NotFound-title">Page not found</h2>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.NotFound {
    align-items: center;
    display: flex;
    height: 70%;
    justify-content: center;
    width: 100%;

    &-title {
        font-size: 1.5rem;
        font-weight: 700;
    }
}
</style>
