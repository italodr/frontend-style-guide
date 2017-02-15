<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content">
        <div class="Block-content">
            <h3 class="t-h5">Required dependencies</h3>
            <dl class="DefinitionList">
                <dt class="DefinitionList-title">fastclick</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/fastclick" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/fastclick</a><br>
                    npm install fastclick
                </dd>
                <dt class="DefinitionList-title">normalize.css</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/normalize.css" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/normalize.css</a><br>
                    npm install normalize.css
                </dd>
            </dl>

            <h3 class="t-h5">Suggested dependencies</h3>
            <dl class="DefinitionList">
                <dt class="DefinitionList-title">jQuery Validation</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/jquery-validation" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/jquery-validation</a><br>
                    npm install jquery-validation
                </dd>
                <dt class="DefinitionList-title">flatpickr</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/flatpickr" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/flatpickr</a><br>
                    npm install flatpickr
                </dd>
                <dt class="DefinitionList-title">picturefill</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/picturefill" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/picturefill</a><br>
                    npm install picturefill
                </dd>
                <dt class="DefinitionList-title">svg4everybody</dt>
                <dd class="DefinitionList-value">
                    <a href="https://www.npmjs.com/package/svg4everybody" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/svg4everybody</a><br>
                    npm install svg4everybody
                </dd>
            </dl>
        </div>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block.vue'

import '../../assets/scss/atoms/_definition_lists.scss'

export default {
    components: {
        Block
    },
    data () {
        return {
            title: 'Dependencies',
            description: 'Recommended Node.js dependencies'
        }
    }
}
</script>

<style lang="scss">
</style>
