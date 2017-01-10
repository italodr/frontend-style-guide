<template>
    <div class="Block">
        <h1 class="Block-title">{{ title }}</h1>
        <p class="Block-description">{{ description }}</p>
        
        <div class="Block-samples">
            <a class="Button" v-bind:href="link">{{ label }}</a>
            <a class="Button" v-bind:href="link">{{ label }}</a>
        </div>
        <div class="Block-code" v-for="hint in hints">{{ hint.code }}</div>
    </div>
</template>

<script>
export default {
    name: 'Buttons',
    data () {
        return {
            title: 'Buttons',
            description: 'Some description',
            label: 'Submit',
            link: '#',
            hints: [
                { code: '<a class="Button" href="link">Label</a>' },
                { code: '<a class="Button Button--hollow" href="link">Label</a>' }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Button {
    background: #bada55;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    line-height: 1;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
}
</style>
