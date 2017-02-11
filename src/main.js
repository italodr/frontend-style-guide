import Vue from 'vue'
import App from './App'

import config from './data/config.js'

/* eslint-disable no-new */
Vue.filter('removeAttr', function (value) {
    let search = /(v-bind:|v-for)/
    return value.replace(new RegExp(search, 'g'), '')
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    data () {
        return {
            config: config
        }
    }
})
