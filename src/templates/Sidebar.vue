<template>
    <div class="Sidebar">
        <img class="Sidebar-logo" src="../assets/img/logo.png">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <ul class="Sidebar-nav">
            <li class="Sidebar-section" v-for="section in sections">
                <a class="Sidebar-sectionItem" v-on:click="toggleSubsection">{{ section.title }}</a>
                <ul class="Sidebar-subnav" v-if="section.subsections">
                    <li class="Sidebar-subsection" v-for="subsection in section.subsections">
                        <a class="Sidebar-subsectionItem" v-bind:href="subsection.anchor">{{ subsection.title }}</a>
                    </li>
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
                        {
                            title: 'Secondary 1',
                            anchor: '#Secondary1'
                        },
                        {
                            title: 'Secondary 2',
                            anchor: '#Secondary2'
                        }
                    ]
                },
                {
                    title: 'Second'
                }
            ],
            methods: {
                toggleSubsection: function (event) {
                    console.log('Hello ' + this.name + '!')
                    console.log(event.target.tagName)
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Sidebar {
    background: #f1f1f1;
    height: 100vh;
    min-width: 300px;
    padding: 20px;
    width: 20%;

    &-logo {
        display: block;
        margin: 0 auto;
        max-width: 100px;
        width: 100%;
    }
}
</style>
