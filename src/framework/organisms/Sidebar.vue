<template>
    <div class="Sidebar">
        <button class="Sidebar-toggle" type="button" v-on:click="methods.toggleSidebar"></button>
        <div class="Sidebar-scroll">
            <div class="Sidebar-content">
                <img class="Sidebar-logo" src="../../assets/img/logo.png">
                <h1 class="Sidebar-title">{{ config.title }}</h1>
                <h2 class="Sidebar-subtitle">{{ config.subtitle }}</h2>
                <ul class="Sidebar-nav">
                    <li class="Sidebar-section" v-for="section in sections">
                        <a class="Sidebar-sectionItem" v-on:click="methods.toggleSubsection" v-if="section.title">{{ section.title }}</a>
                        <ul class="Sidebar-subnav" v-if="section.subsections">
                            <li class="Sidebar-subsection" v-for="subsection in section.subsections">
                                <a class="Sidebar-subsectionItem" v-bind:href="subsection.anchor" v-if="subsection.title">{{ subsection.title }}</a>
                                <ul class="Sidebar-anchors" v-if="subsection.anchors">
                                    <li class="Sidebar-anchor" v-for="anchor in subsection.anchors">
                                        <a class="Sidebar-anchorItem" v-bind:href="`/${section.type}/${subsection.element}/${anchor.link}`">{{ anchor.title }}</a>
                                    </li>
                                    <!-- TODO: find a better solution to use router-link
                                    <router-link class="Sidebar-anchor" v-for="anchor in subsection.anchors" :to="{ name: 'common', params: { type: section.type, element: subsection.element, component: anchor.link }}" tag="li">
                                        <a class="Sidebar-anchorItem">{{ anchor.title }}</a>
                                    </router-link>
                                    -->
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
import mainNavigation from '../../data/main-navigation'
import customNavigation from '../../data/custom-navigation'

import config from '../../data/config.js'

let navigation = [
    mainNavigation,
    customNavigation
];

export default {
    name: 'Sidebar',
    data () {
        return {
            config: config,
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

<style lang="scss">
@import '../../assets/scss/app';

.Sidebar {
    background: $c-lightest;
    height: 100vh;
    left: 0;
    min-width: 300px;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    transition: all .3s linear;
    width: 20%;
    z-index: 9;

    .sidebar-open & {
        box-shadow: 5px 0 6px -4px hsla(0, 60%, 0, .3);
        transform: translateX(0);
    }

    &-title {
        font-size: 1.2rem;
        font-weight: 700;
    }

    &-subtitle {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 1rem;
    }

    &-section {
        background: $c-white;
        border-radius: 4px;
        box-shadow: 0 0 1px 0 rgba($c-darkest, .1);
        margin: 0 0 10px;
        position: relative;

        &:not(:first-child) {
            &::before, &::after {
                background-color: $c-lightest;
                bottom: 100%;
                content: '';
                display: block;
                height: 10px;
                position: absolute;
                z-index: 10;
            }

            &::before {
                border-radius: 0 4px 4px 0;
                box-shadow: 15px 0 0 $c-white;
                left: 4px;
                width: 17px;
            }

            &::after {
                border-radius: 4px 0 0 4px;
                right: 4px;
                width: 225px;
            }
        }
    }

    &-sectionItem,
    &-anchorItem,
    &-subsectionItem {
        border: solid $c-lightest;
        border-width: 0 0 1px;
        display: block;
        font-weight: 700;
        padding: 6px 10px;
    }

    &-anchorItem {
        color: #333;
        font-size: 14px;
        font-weight: 400;
        padding: 4px 10px 4px 20px;
        text-decoration: none;
    }

    &-anchor:last-child {
        .Sidebar-anchorItem { border: 0; }
    }

    &-scroll,
    &-content {
        height: calc(100% - 20px);
        width: calc(100% - 20px);
    }

    &-scroll { overflow: hidden; }

    &-content {
        box-sizing: content-box;
        overflow-y: auto;
        padding: 20px;
    }

    &-logo {
        display: block;
        margin: 0 auto 1rem;
        max-width: 100px;
        width: 100%;
    }

    &-toggle {
        background: $c-lightest;
        border: 0;
        box-shadow: 5px 0 6px -4px hsla(0, 60%, 0, .3);
        cursor: pointer;
        height: 48px;
        left: 100%;
        opacity: .5;
        outline: none;
        position: absolute;
        top: 80px;
        width: 48px;
        z-index: 10;

        &::before,
        &::after {
            background: $c-darkest;
            content: '';
            height: 1px;
            left: 16px;
            position: absolute;
            transition: all .3s ease-in-out;
            transition-delay: .2s;
            width: 16px;
        }

        &::before { top: 21px; }
        &::after { bottom: 21px; }
        &:hover { opacity: 1; }

        .sidebar-open & {
            opacity: 1;
            transform: rotate(90deg);
            transform-origin: center;

            &::before {
                top: 24px;
                transform: rotate(45deg);
                transform-origin: center;
            }

            &::after {
                bottom: 23px;
                transform: rotate(-45deg);
                transform-origin: center;
            }
        }
    }
}
/*
@include breakpoint($s1024) {
    .Sidebar {
        position: static;
        transform: none;

        &-toggle { display: none; }
    }
}
*/
</style>
