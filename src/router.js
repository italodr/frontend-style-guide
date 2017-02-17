import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var params;

/*
 * The require route file is built by:
 *
 * type: which can be both basic or custom
 * element: which corresponds to an atomic element (atoms, molecules, ...)
 * fileName: which is the capitalization (CamelUppercase) of the component parameter (kebab-case)
 *
 * e.g. /basic/atoms/definition-lists
 */
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/:type/:element/:component',
            name: 'common',
            component: (resolve) => {
                require([`./${params.type}/${params.element}/${params.fileName}.vue`], resolve)
            }
        },
        {
            path: '/',
            name: 'home'
        },
        {
            path: '*',
            name: 'notFound',
            component: (resolve) => {
                require(['./framework/pages/404.vue'], resolve)
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    params = to.params;
    if (Object.keys(params).length !== 0 && params.constructor === Object) {
        if (params.component) {
            params.fileName = capitalize(params.component);
        }
    }

    next();
});

function capitalize (string) {
    let tokens = string.split('-'),
        new_string = '';

    for (let i = 0; i < tokens.length; i++) {
        new_string += tokens[i].charAt(0).toUpperCase() + tokens[i].slice(1);
    }

    return new_string;
}

export default router
