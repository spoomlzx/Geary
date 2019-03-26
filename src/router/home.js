import UserLayout from '../components/layout/UserLayout'

export default [
    {
        path: '/',
        name: 'index',
        redirect: '/file/overview',
        hidden: true
    },
    {
        name: 'user',
        path: '/user',
        component: UserLayout,
        meta: { model: 'Login' },
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