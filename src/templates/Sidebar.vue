<template>
    <div class="Sidebar">
        <img class="Sidebar-logo" src="../assets/img/logo.png">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <ul>
            <li v-for="section in sections">
                {{ section.title }}
                <ul v-if="section.subsections">
                    <li v-for="subsection in section.subsections">{{ subsection.title }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {
            title: 'Frontend Style Guide',
            subtitle: 'A responsive components style guide',
            sections: [
                {
                    title: 'First',
                    subsections: [
                        { title: 'Secondary 1' },
                        { title: 'Secondary 2' }
                    ]
                },
                {
                    title: 'Second'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Sidebar {
    background: #f1f1f1;
    height: 100vh;
    min-width: 300px;
    padding: 20px;
    width: 20%;
}

.Sidebar-logo {
    display: block;
    margin: 0 auto;
    max-width: 100px;
    width: 100%;
}
</style>
