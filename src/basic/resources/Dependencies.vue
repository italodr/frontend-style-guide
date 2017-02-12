<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
        <div class="Block-content">
            <dl class="DefinitionList">
                <dt class="DefinitionList-title">fastclick</dt>
                <dd class="DefinitionList-value"><a href="https://www.npmjs.com/package/fastclick" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/fastclick</a></dd>
                <dt class="DefinitionList-title">flatpickr</dt>
                <dd class="DefinitionList-value"><a href="https://www.npmjs.com/package/flatpickr" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/flatpickr</a></dd>
                <dt class="DefinitionList-title">normalize.css</dt>
                <dd class="DefinitionList-value"><a href="https://www.npmjs.com/package/normalize.css" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/normalize.css</a></dd>
                <dt class="DefinitionList-title">picturefill</dt>
                <dd class="DefinitionList-value"><a href="https://www.npmjs.com/package/picturefill" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/picturefill</a></dd>
                <dt class="DefinitionList-title">svg4everybody</dt>
                <dd class="DefinitionList-value"><a href="https://www.npmjs.com/package/svg4everybody" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/svg4everybody</a></dd>
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
