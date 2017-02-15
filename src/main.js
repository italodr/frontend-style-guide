import Vue from 'vue'

import router from './router'
import App from './App'

Vue.filter('removeAttr', function (value) {
    let search = /(v-bind:|v-for)/
    return value.replace(new RegExp(search, 'g'), '')
})

new Vue({
    created: function () {
        window.Vue = this
    },
    router,
    render: h => h(App)
}).$mount('#app')
