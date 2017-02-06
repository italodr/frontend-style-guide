<template>
    <div class="Sidebar">
        <button class="Sidebar-toggle" type="button" v-on:click="methods.toggleSidebar"></button>
        <div class="Sidebar-scroll">
            <div class="Sidebar-content">
                <img class="Sidebar-logo" src="../assets/img/logo.png">
                <h1>{{ title }}</h1>
                <h2>{{ subtitle }}</h2>
                <ul class="Sidebar-nav">
                    <li class="Sidebar-section" v-for="section in sections">
                        <a class="Sidebar-sectionItem" v-on:click="methods.toggleSubsection" v-if="section.title">{{ section.title }}</a>
                        <ul class="Sidebar-subnav" v-if="section.subsections">
                            <li class="Sidebar-subsection" v-for="subsection in section.subsections">
                                <a class="Sidebar-subsectionItem" v-bind:href="subsection.anchor" v-if="subsection.title">{{ subsection.title }}</a>
                                <ul class="Sidebar-anchors" v-if="subsection.anchors">
                                    <li class="Sidebar-anchor" v-for="anchor in subsection.anchors">
                                        <a class="Sidebar-anchorItem" v-bind:href="anchor.anchor">{{ anchor.title }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import customNavigation from './custom-navigation'

let navigation = [
    {
        title: 'First',
        subsections: [
            {
                title: 'Secondary 1',
                anchors: [
                    {
                        title: 'Anchor 1',
                        anchor: '#Anchor1'
                    },
                    {
                        title: 'Anchor 2',
                        anchor: '#Anchor2'
                    }
                ]
            }
        ]
    }
];
navigation.push(customNavigation);

export default {
    name: 'Sidebar',
    data () {
        return {
            title: 'Frontend Style Guide',
            subtitle: 'A responsive components style guide',
            sections: navigation,
            methods: {
                toggleSubsection: function (event) {
                    console.log('Hello', this)
                    console.log(event.target.tagName)
                },
                toggleSidebar: function (event) {
                    // event.target.parentElement
                    document.body.classList.toggle('sidebar-open');
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/scss/templates/sidebar';
</style>
