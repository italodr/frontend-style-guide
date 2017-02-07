// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Prism from 'prismjs'

// Prism.plugins.NormalizeWhitespace.setDefaults({
//     'remove-trailing': true,
//     'remove-indent': false,
//     'left-trim': true,
//     'right-trim': true,
//     'break-lines': 80,
//     'indent': 2,
//     'remove-initial-line-feed': false,
//     'tabs-to-spaces': 4,
//     'spaces-to-tabs': 4
// })

/* eslint-disable no-new */
Vue.filter('removeAttr', function (value) {
    let search = /(v-bind:|v-for)/
    return value.replace(new RegExp(search, 'g'), '')
})

Vue.directive('unescape', {
    bind: function (el, binding, vnode) {
        let content = el.innerHTML;
        let html = Prism.highlight(content, Prism.languages.markup);

        el.innerHTML = html;
    }
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
