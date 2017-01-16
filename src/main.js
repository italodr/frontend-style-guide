// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Prismjs from 'prismjs'
import App from './App'

Vue.filter('removeAttr', function (value) {
    let search = /(v-bind:|v-for)/
    return value.replace(new RegExp(search, 'g'), '')
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

Prismjs.highlight()
