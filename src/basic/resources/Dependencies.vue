<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
        <div class="Block-content">
            <dl class="DefinitionList">
                <dt class="DefinitionList-title">fastclick</dt>
                <dd class="DefinitionList-value">https://www.npmjs.com/package/fastclick</dd>
                <dt class="DefinitionList-title">flatpickr</dt>
                <dd class="DefinitionList-value">https://www.npmjs.com/package/flatpickr</dd>
                <dt class="DefinitionList-title">normalize.css</dt>
                <dd class="DefinitionList-value">https://www.npmjs.com/package/normalize.css</dd>
                <dt class="DefinitionList-title">picturefill</dt>
                <dd class="DefinitionList-value">https://www.npmjs.com/package/picturefill</dd>
                <dt class="DefinitionList-title">svg4everybody</dt>
                <dd class="DefinitionList-value">https://www.npmjs.com/package/svg4everybody</dd>
            </dl>
        </div>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block.vue'

export default {
    components: {
        Block
    },
    data () {
        return {
            title: 'Recommended Node.js dependencies',
            description: 'Some description'
        }
    }
}
</script>

<style lang="scss">
</style>
