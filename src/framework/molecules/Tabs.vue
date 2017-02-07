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
<style>
.nav-tabs {
    background-color: #eeeeee;
    padding-top:5px;
    padding-left:5px;
    border: 1px solid #ddd;

}

.tab-content {
    color : #000000;
    background-color: #ffffff;
    padding : 5px 15px;
    margin-top: -1px;
    border: 1px solid #ddd;
}
</style>
