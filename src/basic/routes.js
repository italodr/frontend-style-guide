export default basic = [
    {
        path: '/basic',
        name: 'basic',
        component: function (resolve) {
            require(['./basic/Basic.vue'], resolve)
        },
        beforeEnter: guardRoute
    }
];
