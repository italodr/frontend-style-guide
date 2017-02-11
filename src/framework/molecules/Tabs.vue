<template>
    <div class="Tabs">
        <button class="Tabs-item" :class="{ active: (activeTab === tab) }" v-for="tab in tabs" @click="activate(tab)">{{ tab }}</button>
        <slot></slot>
    </div>
</template>
<script>
export default{
    data () {
        return {
            activeTab: '',
            tabs: []
        }
    },
    methods: {
        activate (tab) {
            this.activeTab = tab;
            this.$emit('activateTab', tab);
        }
    }
}
</script>
<style lang="scss">
.Tabs {
    &-item {
        background: rgba(#f1f1f1, .35);
        border: solid #e5e5e5;
        border-radius: 0;
        border-width: 0 0 0 1px;
        cursor: pointer;
        font-size: .75rem;
        padding: 12px 24px;

        &:first-child { border: 0; }
        &:hover, &.active { background: #f1f1f1; }
    }

    &-content {
        background-color: #f1f1f1;
        padding : 5px 15px;
        margin-top: -1px;
    }
}
</style>
