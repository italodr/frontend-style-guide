<template>
    <block v-bind:obj="component">
        <div class="Block-content">
            <dl class="Table">
                <dt>$s0</dt>
                <dd>from 0 to 479px</dd>
                <dt>$s480</dt>
                <dd>from 480px to 639px</dd>
                <dt>$s640</dt>
                <dd>from 640px to 767px</dd>
                <dt>$s768</dt>
                <dd>from 768px to 959px</dd>
                <dt>$s960</dt>
                <dd>from 960px to 1023px</dd>
                <dt>$s1024</dt>
                <dd>from 1024px to 1199px</dd>
                <dt>$s1200</dt>
                <dd>from 1200px to 1439px</dd>
                <dt>$s1440</dt>
                <dd>from 1440px to 1919px</dd>
                <dt>$s1920</dt>
                <dd>from 1920px</dd>
            </dl>

            $breakpoints: (
                (xxs, $s0),
                (xs, $s480),
                (sm, $s640),
                (md, $s768),
                (lg, $s960),
                (xl, $s1024),
                (xxl, $s1200),
                (sxl, $s1440),
                (sxxl, $s1920)
            );
        </div>
        <tabs>
            <tab label="Users" selected>Users tab</tab>
            <tab label="Options">Options tab</tab>
            <tab label="Tasks">Tasks tab</tab>
            <tab label="Other stuff">Other stuff</tab>
            <tab label="Styling">Styling tab</tab>
        </tabs>
    </block>
</template>

<script>
import Block from '../organisms/Block.vue'
import Tabs from '../organisms/Tabs.vue'
import Tab from '../molecules/Tab.vue'

export default {
    components: {
        Block,
        Tabs,
        Tab
    },
    data () {
        return {
            component: {
                title: 'Breakpoints',
                description: 'Some description'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
