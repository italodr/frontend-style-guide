import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var params;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/basic/:type/:component',
            name: 'basic',
            component: function (resolve) {
                var fileName = capitalize(params.component);
                require([`./basic/${params.type}/${fileName}.vue`], resolve)
            },
            beforeEnter: guardRoute
        },
        {
            path: '/custom/:type/:component',
            name: 'custom',
            component: function (resolve) {
                var fileName = capitalize(params.component);
                require([`./custom/${params.type}/${fileName}.vue`], resolve)
            },
            beforeEnter: guardRoute
        }
    ]
})

function guardRoute (to, from, next) {
    params = to.params;
    next()
}

function capitalize (string) {
    var tokens = string.split('-'),
        new_string = '';

    for (var i = 0; i < tokens.length; i++) {
        new_string += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
    }

    return new_string;
}

export default router
