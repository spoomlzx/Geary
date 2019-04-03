import UserLayout from '../components/layout/UserLayout'

export default [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/Home.vue'),
        meta: { side: false }
    },
    {
        name: '404',
        path: '/404',
        component: () => import('../views/error/404.vue'),
        meta: { model: 'error' },
    },
    {
        name: 'user',
        path: '/user',
        component: UserLayout,
        meta: { model: 'Login', side: false },
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/user/login.vue'),
                meta: { model: 'Login' },
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../views/user/register.vue'),
                meta: { model: 'Login' },
            }
        ]
    },
];