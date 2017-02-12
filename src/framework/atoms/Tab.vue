<template>
    <div class="Tabs-content" v-show="visible">
        <slot name="tabContent"></slot>
    </div>
</template>
<script>
export default{
    props: ['label', 'selected'],
    created () {
        var self = this;

        if (typeof this.selected !== 'undefined' && this.selected === '') {
            this.$parent.$data.activeTab = this.label;
            this.visible = true;
        }

        this.$parent.$data.tabs.push(this.label);
        this.$parent.$on('activateTab', function (tab) {
            if (self.label === tab) {
                self.visible = true;
            } else {
                self.visible = false;
            }
        })
    },
    data () {
        return {
            visible: false
        }
    }
}
</script>
