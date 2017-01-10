<template>
    <div class="Sidebar">
        <img src="../assets/logo.png">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {
            title: 'Frontend Style Guide',
            subtitle: 'A responsive components style guide'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
.Sidebar {
    background: #f1f1f1;
    height: 100vh;
    padding: 20px;
    width: 20%;
}
</style>
