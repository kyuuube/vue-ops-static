const routes = [
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        meta: { notLogin: true }
    },
    {
        path: '/',
        component: () => import('../views/view.vue'),
        meta: { requireAuth: true }
    }
];

export default routes;
